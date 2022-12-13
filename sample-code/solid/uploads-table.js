import { Switch, Match } from 'solid-js'
import { useKeyring } from '@w3ui/solid-keyring'
import { createUploadsListResource } from '@w3ui/solid-uploads-list'

export default function Component () {
  const [keyringState, keyringActions] = useKeyring()
  const [data, { refetch }] = createUploadsListResource(() => ({...keyringState, ...keyringActions}), { initialValue: { results: [] } })

  return (
    <div>
      <Switch>
        <Match when={data.state === 'errored'}>
          <p>⚠️ {err.message}</p> 
        </Match>
        <Match when={data.state === 'ready'}>
          {data().results.length
            ? (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Data CID</th>
                      <th>CAR CID</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data().results.map(({ dataCid, carCids, uploadedAt }) => (
                      <tr key={dataCid}>
                        <td>{dataCid}</td>
                        <td>{carCids[0]}</td>
                        <td>{uploadedAt.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )
            : <p>No uploads</p>}
        </Match>
      </Switch>
      <button type='button' onClick={refetch}>Refresh</button>
      {data.loading ? <p>Loading...</p> : null}
    </div>
  )
}
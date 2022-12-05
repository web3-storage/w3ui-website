import { AuthProvider, useAuth } from '@w3ui/solid-keyring'
import { createUploadsListResource } from '@w3ui/solid-uploads-list'

export default function Component () {
  const [auth] = useAuth()
  const [data, { refetch }] = createUploadsListResource(() => auth.identity, { initialValue: { results: [] } })

  return (
    <div>
      <Switch>
        <Match when={data.state === 'errored'}>
          <p>⚠️ {err.message}</p>
        </Match>
        <Match when={data.state === 'ready'}>
          {data().results.length
            ? (
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
              )
            : <p>No uploads</p>}
        </Match>
      </Switch>
      <button type='button' onClick={refetch}>🔄 Refresh</button>
      {data.loading ? <p>Loading...</p> : null}
    </div>
  )
}
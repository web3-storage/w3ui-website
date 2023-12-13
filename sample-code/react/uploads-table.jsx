import React from 'react'
import { useW3 } from 'w3ui/react'

export default function Component({ }) {
  const [{ client }] = useW3()
  const currentSpace = client?.currentSpace()
  const { data, error } = useSWR(currentSpace ? `${currentSpace.did()}-uploads` : undefined, {
    fetcher: async () => {
      if (client) {
        return await client.capability.upload.list()
      }
    }
  })
  if (error) {
    return <p>⚠️ {error.message}</p>
  } else {
    return (
      <div>
        {data && data.results.length
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
                {data.results.map(({ root, shards, updatedAt }) => (
                  <tr key={root.toString()}>
                    <td>{root.toString()}</td>
                    <td>{shards[0].toString()}</td>
                    <td>{updatedAt.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
          : <p>No uploads</p>}
      </div>
    )
  }
}
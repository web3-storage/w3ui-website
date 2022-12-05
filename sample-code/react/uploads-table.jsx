import { useState } from 'react'
import { useUploadsList } from '@w3ui/react-uploads-list'

export default function Component () {
  const { loading, data, error, reload } = useUploadsList()
  if (error) return <p>⚠️ {err.message}</p>

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
              {data.results.map(({ dataCid, carCids, uploadedAt }) => (
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
      <button type='button' onClick={reload}>🔄 Refresh</button>
      {loading ? <p>Loading...</p> : null}
    </div>
  )
}
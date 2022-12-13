import { createSignal, Switch, Match } from 'solid-js'
import { useUploader } from '@w3ui/solid-uploader'

export default function Component () {
  const [, uploader] = useUploader()
  const [file, setFile] = createSignal(null)
  const [dataCid, setDataCid] = createSignal(null)

  const handleUploadSubmit = async e => {
    e.preventDefault()
    const cid = await uploader.uploadFile(file())
    setDataCid(cid)
  }

  return (
    <Switch>
      <Match when={dataCid() !== ''}>
        <div>
          <h1>Done!</h1>
          <p>{dataCid}</p>
        </div>
      </Match>
      <Match when={dataCid() === ''}>
        <form onSubmit={handleUploadSubmit}>
          <div>
            <label htmlFor='file'>File:</label>
            <input id='file' type='file' onChange={e => setFile(e.target.files[0])} required />
          </div>
          <button type='submit'>Upload</button>
        </form>
      </Match>
    </Switch>
  )
}

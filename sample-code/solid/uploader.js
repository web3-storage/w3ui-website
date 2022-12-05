import { createSignal, Switch, Match } from 'solid-js'
import { useUploader } from '@w3ui/solid-uploader'

export default function Component () {
  const [, uploader] = useUploader()
  const [file, setFile] = createSignal(null)
  const [cid, setCid] = createSignal('')

  const handleUploadSubmit = async e => {
    e.preventDefault()
    const cid = await uploader.uploadFile(file())
    setCid(cid)
  }

  return (
    <Switch>
      <Match when={cid() !== ''}>
        <div>
          <h1>Done!</h1>
          <p>{cid}</p>
        </div>
      </Match>
      <Match when={cid() === ''}>
        <form onSubmit={handleUploadSubmit}>
          <label htmlFor='file'>File:</label>
          <input id='file' type='file' onChange={e => setFile(e.target.files[0])} required />
          <button type='submit'>Upload</button>
        </form>
      </Match>
    </Switch>
  )
}
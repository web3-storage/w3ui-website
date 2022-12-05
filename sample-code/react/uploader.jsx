import { useState } from 'react'
import { useUploader } from '@w3ui/react-uploader'

export default function Component () {
  const [, uploader] = useUploader()
  const [file, setFile] = useState(null)
  const [cid, setCid] = useState('')

  const handleUploadSubmit = async e => {
    e.preventDefault()
    const cid = await uploader.uploadFile(file)
    setCid(cid)
  }
  
  if (cid) {
    return (
      <div>
        <h1>Done!</h1>
        <p>{cid}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleUploadSubmit}>
      <label htmlFor='file'>File:</label>
      <input id='file' type='file' onChange={e => setFile(e.target.files[0])} required />
      <button type='submit'>Upload</button>
    </form>
  )
}
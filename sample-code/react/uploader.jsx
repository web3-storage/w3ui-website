import React from 'react'
import { useUploader, Uploader } from '@w3ui/react'

export default function Component() {
  const [{ file }] = useUploader()
  const hasFile = file !== undefined
  return (
    <Uploader.Form>
      <label className={`${hasFile ? 'hidden' : 'block'}`}>File:</label>
      <Uploader.Input className={`${hasFile ? 'hidden' : 'block'}`} />
      <span className={`${hasFile ? 'block' : 'hidden'}`}>{file.name}</span>
      <button type='submit' disabled={!hasFile}>
        Upload
      </button>
    </Uploader.Form>
  )
}

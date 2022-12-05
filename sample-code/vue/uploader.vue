<script>
import { UploaderProviderInjectionKey } from '@w3ui/vue-uploader'
export default {
  inject: {
    encodeFile: { from: UploaderProviderInjectionKey.encodeFile },
    uploadCar: { from: UploaderProviderInjectionKey.uploadCar }
  },
  data () {
    return { file: null, cid: null }
  },
  methods: {
    async handleUploadSubmit (e) {
      e.preventDefault()
      const cid = await uploader.uploadFile(this.file)
      this.cid = cid.toString()
    },
    handleFileChange (e) {
      e.preventDefault()
      this.file = e.target.files[0]
    }
  }
}
</script>
<template>
  <div v-if="cid !== ''">
    <h1>Done!</h1>
    <p>{{cid}}</p>
  </div>
  <form v-if="!cid" @submit="handleUploadSubmit">
    <label htmlFor='file'>File:</label>
    <input id='file' type='file' @change="handleFileChange" required />
    <button type='submit'>Upload</button>
  </form>
</template>
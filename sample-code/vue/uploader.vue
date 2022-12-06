<script>
import { UploaderProviderInjectionKey } from '@w3ui/vue-uploader'

export default {
  inject: {
    uploadFile: { from: UploaderProviderInjectionKey.uploadFile },
  },
  data () {
    return {
      file: null,
      dataCid: null,
    }
  },
  methods: {
    async handleUploadSubmit (e) {
      e.preventDefault()
      const cid = await this.uploadFile(this.file)
      this.dataCid = cid.toString()
    },
    handleFileChange (e) {
      e.preventDefault()
      this.file = e.target.files[0]
    }
  }
}
</script>

<template>
  <div v-if="dataCid !== ''">
    <h1>Done!</h1>
    <p>{{dataCid}}</p>
    <p><a :href="'https://w3s.link/ipfs/' + dataCid">View {{file.name}} on IPFS Gateway.</a></p>
  </div>

  <form v-if="!dataCid" @submit="handleUploadSubmit">
    <label htmlFor="file">File:</label>
    <input id="file" type="file" @change="handleFileChange" required />
    <button type="submit">Upload</button>
  </form>
</template>
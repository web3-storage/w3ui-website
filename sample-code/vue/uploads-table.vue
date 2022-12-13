<script>
import { UploadsListProviderInjectionKey } from '@w3ui/vue-uploads-list'

export default {
  inject: {
    loading: { from: UploadsListProviderInjectionKey.loading },
    data: { from: UploadsListProviderInjectionKey.data },
    error: { from: UploadsListProviderInjectionKey.error },
    reload: { from: UploadsListProviderInjectionKey.reload }
  }
}
</script>
<template>
  <div v-if="error == null">
    <div v-if="data && data.results.length">
      <table>
        <thead>
          <tr>
            <th>Data CID</th>
            <th>CAR CID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="upload in data.results">
            <td>{{upload.dataCid}}</td>
            <td>{{upload.carCids[0]}}</td>
            <td>{{upload.uploadedAt.toLocaleString()}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No uploads</p>
    <button type="button" @click="reload">Refresh</button>
    <p v-if="loading">Loading...</p>
  </div>
  <div v-else>
    <h1>⚠️ Error: failed to list uploads: {{error.message}}</h1>
    <p>Check the browser console for details.</p>
  </div>
</template>
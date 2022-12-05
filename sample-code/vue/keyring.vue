<script>
import { AuthProviderInjectionKey, AuthStatus } from '@w3ui/vue-keyring'
export default {
  inject: {
    identity: { from: AuthProviderInjectionKey.identity },
    status: { from: AuthProviderInjectionKey.status },
    registerAndStoreIdentity: { from: AuthProviderInjectionKey.registerAndStoreIdentity }
  },
  data () {
    return { email: '' }
  },
  computed: {
    AuthStatus: () => AuthStatus
  },
  methods: {
    async handleRegisterSubmit (e) {
      e.preventDefault()
      await this.registerAndStoreIdentity(this.email)
    }
  }
}
</script>
<template>
  <div v-if="status === AuthStatus.SignedIn">
    <h1>Welcome {{identity.email}}!</h1>
    <p>You are logged in!!</p>
  </div>
  <div v-if="status === AuthStatus.EmailVerification">
    <h1>Verify your email address!</h1>
    <p>Click the link in the email we sent to {{identity.email}} to sign in.</p>
  </div>
  <form v-if="status === AuthStatus.SignedOut" @submit="handleRegisterSubmit">
    <label htmlFor="email">Email address:</label>
    <input id="email" type="email" v-model="email" required />
    <button type="submit">Register</button>
  </form>
</template>  
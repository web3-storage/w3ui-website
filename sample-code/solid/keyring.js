import { createSignal, Switch, Match } from 'solid-js'
import { useAuth, AuthStatus } from '@w3ui/solid-keyring'

export default function Component () {
  const [auth, { loadDefaultIdentity, registerAndStoreIdentity }] = useAuth()
  const [email, setEmail] = createSignal('')

  loadDefaultIdentity() // try load default identity - once.

  return (
    <Switch>
      <Match when={auth.status === AuthStatus.SignedIn}>
        <div>
          <h1>Welcome {auth.identity.email}!</h1>
          <p>You are logged in!!</p>
        </div>
      </Match>
      <Match when={auth.status === AuthStatus.EmailVerification}>
        <div>
          <h1>Verify your email address!</h1>
          <p>Click the link in the email we sent to {auth.identity.email} to sign in.</p>
        </div>
      </Match>
      <Match when={auth.status === AuthStatus.SignedOut}>
        <form onSubmit={e => { e.preventDefault(); registerAndStoreIdentity(email()) }}>
          <div>
            <label htmlFor='email'>Email address:</label>
            <input id='email' type='email' value={email()} onInput={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit'>Register</button>
        </form>
      </Match>
    </Switch>
  )
}
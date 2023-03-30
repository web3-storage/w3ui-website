import { createSignal, Switch, Match } from 'solid-js'
import { useKeyring } from '@w3ui/solid-keyring'

export default function ContentPage () {
  const [keyring, { authorize, cancelAuthorize, loadAgent, unloadAgent }] = useKeyring()
  const [email, setEmail] = createSignal('')
  const [submitted, setSubmitted] = createSignal(false)

  loadAgent() // try load agent - once.

  const handleAuthorizeSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    try {
      await authorize(email())
    } catch (err) {
      throw new Error('failed to authorize', { cause: err })
    } finally {
      setSubmitted(false)
    }
  }
  return (
    <Switch>
      <Match when={keyring.account}>
        <div>
          <h1>Welcome {keyring.account}!</h1>
          <p>You are logged in!!</p>
          <form onSubmit={e => { e.preventDefault(); unloadAgent() }}>
            <button type='submit'>Sign Out</button>
          </form>
        </div>
      </Match>
      <Match when={submitted()}>
        <div>
          <h1>Verify your email address!</h1>
          <p>Click the link in the email we sent to {keyring.account} to sign in.</p>
          <form onSubmit={e => { e.preventDefault(); cancelAuthorize() }}>
            <button type='submit'>Cancel</button>
          </form>
        </div>
      </Match>
      <Match when={!keyring.account && !submitted()}>
        <form onSubmit={handleAuthorizeSubmit}>
          <div>
            <label htmlFor='email'>Email address:</label>
            <input id='email' type='email' value={email()} onInput={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit' disabled={submitted()}>Authorize</button>
        </form>
      </Match>
    </Switch>
  )
}

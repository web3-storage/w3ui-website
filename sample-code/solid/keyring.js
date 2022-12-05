import { createSignal, Switch, Match } from 'solid-js'
import { useKeyring } from '@w3ui/solid-keyring'

export default function Component() {
  const [keyring, { createSpace, registerSpace, cancelRegisterSpace, loadAgent, unloadAgent }] = useKeyring()
  const [email, setEmail] = createSignal('')
  const [submitted, setSubmitted] = createSignal(false)

  loadAgent() // try load agent - once.

  const handleRegisterSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    try {
      await createSpace()
      await registerSpace(email())
    } catch (err) {
      throw new Error('failed to register', { cause: err })
    } finally {
      setSubmitted(false)
    }
  }
  return (
    <Switch>
      <Match when={keyring.space?.registered()}>
        <div>
          <h1>Welcome {keyring.agent?.email}!</h1>
          <p>You are logged in!!</p>
          <form onSubmit={e => { e.preventDefault(); unloadAgent() }}>
            <button type='submit'>Sign Out</button>
          </form>
        </div>
      </Match>
      <Match when={submitted()}>
        <div>
          <h1>Verify your email address!</h1>
          <p>Click the link in the email we sent to {keyring.agent?.email} to sign in.</p>
          <form onSubmit={e => { e.preventDefault(); cancelRegisterSpace() }}>
            <button type='submit'>Cancel</button>
          </form>
        </div>
      </Match>
      <Match when={!keyring.space?.registered() && !submitted()}>
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label htmlFor='email'>Email address:</label>
            <input id='email' type='email' value={email()} onInput={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit' disabled={submitted()}>Register</button>
        </form>
      </Match>
    </Switch>
  )
}


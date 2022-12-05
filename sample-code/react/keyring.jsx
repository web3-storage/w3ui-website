import { useEffect, useState } from 'react'
import { useAuth, AuthStatus } from '@w3ui/react-keyring'

export default function Component () {
  const { authStatus, identity, loadDefaultIdentity, registerAndStoreIdentity } = useAuth()
  const [email, setEmail] = useState('')

  useEffect(() => { loadDefaultIdentity() }, []) // try load default identity - once.

  if (authStatus === AuthStatus.SignedIn) {
    return (
      <div>
        <h1>Welcome {identity.email}!</h1>
        <p>You are logged in!!</p>
      </div>
    )
  }
  
  if (authStatus === AuthStatus.EmailVerification) {
    return (
      <div>
        <h1>Verify your email address!</h1>
        <p>Click the link in the email we sent to {identity.email} to sign in.</p>
      </div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); registerAndStoreIdentity(email) }}>
      <label htmlFor='email'>Email address:</label>
      <input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      <button type='submit'>Register</button>
    </form>
  )
}
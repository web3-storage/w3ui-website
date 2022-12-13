import React, { useEffect, useState } from 'react'
import { useKeyring } from '@w3ui/react-keyring'

export default function Component () {
  const [{ space }, { loadAgent, unloadAgent, createSpace, registerSpace, cancelRegisterSpace }] = useKeyring()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { loadAgent() }, []) // load the agent - once.

  if (space?.registered()) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>You are logged in!!</p>
        <form onSubmit={e => { e.preventDefault(); unloadAgent() }}>
          <button type='submit'>Sign Out</button>
        </form>
      </div>
    )
  }

  if (submitted) {
    return (
      <div>
        <h1>Verify your email address!</h1>
        <p>Click the link in the email we sent to {email} to sign in.</p>
        <form onSubmit={e => { e.preventDefault(); cancelRegisterSpace() }}>
          <button type='submit'>Cancel</button>
        </form>
      </div>
    )
  }

  const handleRegisterSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    try {
      await createSpace()
      await registerSpace(email)
    } catch (err) {
      throw new Error('failed to register', { cause: err })
    } finally {
      setSubmitted(false)
    }
  }

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div>
        <label htmlFor='email'>Email address:</label>
        <input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <button type='submit' disabled={submitted}>Register</button>
    </form>
  )
}


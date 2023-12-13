import React from 'react'
import { Authenticator, useAuthenticator } from '@w3ui/react'

export default function Component() {
  const [{ submitted }] = useAuthenticator()
  return (
    <Authenticator.Form>
      <div>
        <label htmlFor='authenticator-email'>Email</label>
        <Authenticator.EmailInput id='authenticator-email' required />
      </div>
      <button type='submit' disabled={submitted}>
        Authorize
      </button>
    </Authenticator.Form>
  )
}


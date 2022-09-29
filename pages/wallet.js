import { PageHead } from '../components/PageHead';
import { ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

export default function WalletPage() {
  const scrollY = useScrollPosition(60 /*fps*/)
  const features = [
    {
      name: 'Simple Registration',
      description: 'UCAN based registration and email verification is fast and easy even for switching accounts',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Secure Account Delegation',
      description: 'Secure key creation and storage allows you to build multi-tenant apps without a shared API key',
      icon: UserGroupIcon,
    }
  ]
  const frameworks = [
    {
      id: 'react',
      title: 'React',
      language: 'jsx',
      link: 'http://codesandbox.io/',
      code: `
import { useEffect, useState } from 'react'
import { useAuth, AuthStatus } from '@w3ui/react-wallet'

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
      `
    },
    {
      id: 'solid',
      title: 'Solid',
      language: 'jsx',
      link: 'http://codesandbox.io/',
      code: `
import { createSignal, Switch, Match } from 'solid-js'
import { useAuth, AuthStatus } from '@w3ui/solid-wallet'

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
`
    },
    {
      id: 'vue',
      title: 'Vue',
      language: 'htmlbars',
      link: 'http://codesandbox.io/',
      code: `
<script>
import { AuthProviderInjectionKey, AuthStatus } from '@w3ui/vue-wallet'
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
`
    }
  ]

  return (
    <div>
      <PageHead />
      <main className={`main ${scrollY > 10 && 'scrolled'}`}>
        <section className={`min-h-screen flex flex-col justify-center text-left text-lg`}>
          <Header />

          <div className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-10 md:px-20 mb-24">

            <ComponentIntro
              title="A Wallet component to simplify the next generation of web3.storage Auth."
              desc="Simple UCAN based authentication. Includes registration and email verification, key creation and secure storage, as well as tools to switch between accounts and delegate abilities to other parties allowing you to build multi-tenant apps that allow your users to upload data to web3.storage without registration or a shared API key!"
              id="wallet"
            />

            <ComponentFeatures features={features} />

          </div>
        </section>
      </main>

      <CodeTabs frameworks={frameworks} />

      <Footer />
    </div>
  )
}
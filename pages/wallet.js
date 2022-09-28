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
import { useAuth, AuthStatus } from '@w3ui/react-wallet'

export default function ContentPage () {
  const { authStatus, identity, loadDefaultIdentity, registerAndStoreIdentity, unloadIdentity, cancelRegisterAndStoreIdentity } = useAuth()

  useEffect(() => { loadDefaultIdentity() }, []) // try load default identity - once.

  const handleRegisterSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    try {
      await registerAndStoreIdentity(email)
    } catch (err) {
      throw new Error('failed to register', { cause: err })
    } finally {
      setSubmitted(false)
    }
  }

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div className='mb3'>
        <label htmlFor='email' className='db mb2'>Email address:</label>
        <input id='email' className='db pa2 w-100' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <button type='submit' className='ph3 pv2' disabled={submitted}>Register</button>
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
import { useAuth, AuthStatus } from '@w3ui/solid-wallet'

export default function ContentPage () {
  const [auth, { loadDefaultIdentity, registerAndStoreIdentity, unloadIdentity, cancelRegisterAndStoreIdentity }] = useAuth()
  const [email, setEmail] = createSignal('')
  const [submitted, setSubmitted] = createSignal(false)

  loadDefaultIdentity() // try load default identity - once.

  const handleRegisterSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    try {
      await registerAndStoreIdentity(email())
    } catch (err) {
      throw new Error('failed to register', { cause: err })
    } finally {
      setSubmitted(false)
    }
  }

  return (
    <Switch>
      <Match when={auth.status === AuthStatus.SignedOut}>
        <form onSubmit={handleRegisterSubmit}>
          <div className='mb3'>
            <label htmlFor='email' className='db mb2'>Email address:</label>
            <input id='email' className='db pa2 w-100' type='email' value={email()} onInput={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit' className='ph3 pv2' disabled={submitted()}>Register</button>
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
    registerAndStoreIdentity: { from: AuthProviderInjectionKey.registerAndStoreIdentity },
    cancelRegisterAndStoreIdentity: { from: AuthProviderInjectionKey.cancelRegisterAndStoreIdentity },
    unloadIdentity: { from: AuthProviderInjectionKey.unloadIdentity }
  },
  data () {
    return {
      email: '',
      submitted: false
    }
  },
  computed: {
    AuthStatus: () => AuthStatus
  },
  methods: {
    async handleRegisterSubmit (e) {
      e.preventDefault()
      this.submitted = true
      try {
        await this.registerAndStoreIdentity(this.email)
      } catch (err) {
        throw new Error('failed to register', { cause: err })
      } finally {
        this.submitted = false
      }
    },
  }
}
</script>

<template>
  <form v-if="status === AuthStatus.SignedOut" @submit="handleRegisterSubmit">
    <div className="mb3">
      <label htmlFor="email" className="db mb2">Email address:</label>
      <input id="email" className="db pa2 w-100" type="email" v-model="email" required />
    </div>
    <button type="submit" className="ph3 pv2" :disabled="submitted">Register</button>
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
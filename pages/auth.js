import { PageHead } from '../components/PageHead.js';
import { ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header.js';
import { ComponentIntro } from '../components/ComponentIntro.js';
import { ComponentFeatures } from '../components/ComponentFeatures.js';
import { Footer } from '../components/Footer.js';
import { CodeTabs } from '../components/CodeTabs.js';
import useScrollPosition from '@react-hook/window-scroll'

import reactSample from '../sample-code/react/auth.jsx'

export default function AuthPage() {
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
      // TODO: revive after codesandbox is working again
      //link: 'https://codesandbox.io/s/w3ui-example-react-sign-up-in-mk3mql',
      code: reactSample,
    }
  ]

  return (
    <div>
      <PageHead />
      <main className={`main ${scrollY > 10 && 'scrolled'}`}>
        <section className={`min-h-screen flex flex-col justify-center text-left text-lg`}>
          <Header />

          <div className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-16 md:px-20 mb-24">

            <ComponentIntro
              title="A component to simplify the next generation of web3.storage Auth."
              desc="Simple UCAN based authentication. Includes registration and email verification, key creation and secure storage, as well as tools to switch between accounts and delegate abilities to other parties allowing you to build multi-tenant apps that allow your users to upload data to web3.storage without registration or a shared API key!"
              id="auth"
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
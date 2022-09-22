import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PageHead } from '../components/PageHead';
import { ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';

export default function WalletPage() {
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
  const { ref, inView, entry } = useInView({
    rootMargin: '0px',
    threshold: .99
  });
  const [framework, setFramework] = useState();
  const [frameworks, setFrameworks] = useState([]);
  const [codeReact, setCodeReact] = useState('');
  const [codeReactNative, setCodeReactNative] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.github.com/repos/web3-storage/w3ui/contents/examples/react/sign-up-in/src/ContentPage.js')
      .then(response => response.json())
      .then(data => {
        setFrameworks([{
          id: 'react',
          code: atob(data.content)
        }])
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <PageHead />
      <main className={`main ${inView ? '' : 'scrolled'}`} ref={ref}>
        <section className={`min-h-screen flex flex-col justify-center text-left text-lg ${inView ? '' : 'scrolled'}`} ref={ref}>
          <Header />

          <div className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-10 md:px-20 mb-24">

            <ComponentIntro
              title="A Wallet component to simplify the next generation of Web3.Storage Auth."
              desc="Simple UCAN based authentication. Includes registration and email verification, key creation and secure storage, as well as tools to switch between accounts and delegate abilities to other parties allowing you to build multi-tenant apps that allow your users to upload data to Web3.Storage without registration or a shared API key!"
              id="wallet"
            />

            <p className="text-gray-400 my-16 text-center"><strong className="text-white font-semibold">Supported frameworks:</strong> React, React Native, Vue, Solid, Svelte</p>

            <ComponentFeatures features={features} />

          </div>
        </section>
      </main>

      <CodeTabs frameworks={frameworks}/>

      <Footer />
    </div>
  )
}
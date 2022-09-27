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
  const frameworkList = ['react', 'solid', 'vue']
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
    const fetchHeaders = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + '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',
        'Host': 'api.producthunt.com'
      }
    };
    const createFrameworkObject = async () => {
      await Promise.all([
        fetch(`https://api.github.com/repos/web3-storage/w3ui/contents/examples/react/sign-up-in/src/ContentPage.js`, fetchHeaders),
        fetch(`https://api.github.com/repos/web3-storage/w3ui/contents/examples/solid/sign-up-in/src/ContentPage.jsx`, fetchHeaders),
        fetch(`https://api.github.com/repos/web3-storage/w3ui/contents/examples/vue/sign-up-in/src/ContentPage.vue`, fetchHeaders)
      ]
      ).then(async([react, solid, vue]) => {
        const reactCode = await react.json();
        const solidCode = await solid.json();
        const vueCode = await vue.json();
        setFrameworks([
          {
            id: 'react',
            title: 'React',
            code: atob(reactCode.content),
            language: 'jsx'
          },
          {
            id: 'solid',
            title: 'Solid',
            code: atob(solidCode.content),
            language: 'jsx'
          },
          {
            id: 'vue',
            title: 'Vue',
            code: atob(vueCode.content),
            language: 'htmlbars'
          }
        ])
        setIsLoading(false)
      })
    }
    createFrameworkObject();
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

            <ComponentFeatures features={features} />

          </div>
        </section>
      </main>

      <CodeTabs frameworks={frameworks} />

      <Footer />
    </div>
  )
}
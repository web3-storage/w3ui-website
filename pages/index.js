import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Nav } from '../components/Nav';
import { components } from '../utils';
import { Header } from '../components/Header';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const frameworks = ['react'];

  const code = {
    'react': `
    import React, { useEffect, useState } from 'react'
    import { useAuth, AuthStatus } from '@w3ui/react-wallet'
    
    export default function ContentPage () {
      const { authStatus, identity, loadDefaultIdentity, registerAndStoreIdentity, unloadIdentity } = useAuth()
      const [email, setEmail] = useState('')
    
      // eslint-disable-next-line
      useEffect(() => { loadDefaultIdentity() }, []) // try load default identity - once.
    
      if (authStatus === AuthStatus.SignedIn) {
        return (
          <div>
            <h1>Welcome {identity.email}!</h1>
            <p className=''>You are logged in!!</p>
            <form onSubmit={e => { e.preventDefault(); unloadIdentity() }}>
              <button type='submit' className='ph3 pv2'>Sign Out</button>
            </form>
          </div>
        )
      }
    
      if (authStatus === AuthStatus.EmailVerification) {
        return (
          <div>
            <h1>Verify your email address!</h1>
            <p>Click the link in the email we sent to {email} to sign in.</p>
          </div>
        )
      }
    
      const handleRegisterSubmit = async e => {
        e.preventDefault()
        try {
          await registerAndStoreIdentity(email)
        } catch (err) {
          throw new Error('failed to register', { cause: err })
        }
      }
    
      return (
        <form onSubmit={handleRegisterSubmit}>
          <div className='db mb3'>
            <label htmlFor='email' className='db mb2'>Email address:</label>
            <input id='email' className='db pa2 w-100' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit' className='ph3 pv2'>Register</button>
        </form>
      )
    }`
  };

  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      icon: CheckCircleIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Some other feature',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
      icon: CheckCircleIcon,
    },
  ]

  const { ref, inView, entry } = useInView({
    rootMargin: '0px',
    threshold: .99
  });
  const [framework, setFramework] = useState('react');

  return (
    <div>
      <Head>
        <title>w3ui — Headless, type-safe, UI components for Web3.Storage IPFS upload APIs</title>
        <meta name="description" content="Headless, type-safe, UI components for React, React Native, vanilla JS, Vue, Solid, Svelte, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${inView ? '' : 'scrolled'}`} ref={ref}>
        <section className={`min-h-screen flex flex-col justify-center text-center text-lg ${inView ? '' : 'scrolled'}`} ref={ref}>
          <Header />
          <div className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-10 md:px-20">
            <h1 className="text-3xl lg:text-3xl xl:text-5xl font-400 mx-auto !leading-snug my-4">
              Headless, type-safe, UI components for the next generation of Web3.Storage APIs.
            </h1>

            <p className="text-lg xl:text-xl text-gray-400 mb-8 xl:max-w-4xl mx-auto !leading-relaxed xl:mb-2">Build production ready apps or awesome demos for hackathons that use the Web3.Storage service for storing content addressed IPLD data on IPFS and Filecoin. Pick a supported framework or go vanilla and spin up a Web 3.0 application using headless components that let YOU choose the theme and interactions.</p>

            <p className="text-gray-400 mt-16 mb-6"><strong className="text-white font-semibold">Supported frameworks:</strong> React, React Native, Vue, Solid, Svelte</p>

            <section className="w-full max-w-7xl mx-auto flex mb-36">
              <div className="grid w-full justify-center sm:grid-cols-3 gap-2 lg:gap-8 gap-y-16">
                {components.map(comp => (
                  <>
                    <Link href={`/${comp.id}`}>
                      <div>
                        <a className={`${comp.class} card relative rounded-xl shadow-xl p-6 xl:p-8 max-w-sm bg-opacity-75 hover:bg-opacity-100 transition flex`}>
                          <Image src={`${comp.svg}`} alt={`${comp.id}`} width="400" height="200" />
                        </a>
                        <h2 className="text-xl font-bold mt-4">{comp.title}</h2>
                        <p className="text-gray-400 text-sm">{comp.desc}</p>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </section>
          </div>
        </section>
        {/* <div className="flex gap-8 items-center mb-24 mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={24} width={24} ><g><path d="M22.17,16.66H14.83a1.83,1.83,0,0,1,0-3.66h7.34a1.83,1.83,0,0,1,0,3.66Z" fill="currentColor" /><path d="M14.83,11A1.83,1.83,0,0,1,13,9.17V1.83a1.83,1.83,0,1,1,3.65,0V9.17A1.83,1.83,0,0,1,14.83,11Z" fill="currentColor" /><path d="M9.17,11H1.83a1.83,1.83,0,0,1,0-3.66H9.17a1.83,1.83,0,0,1,0,3.66Z" fill="currentColor" /><path d="M9.17,24a1.83,1.83,0,0,1-1.83-1.83V14.83a1.83,1.83,0,1,1,3.65,0v7.34A1.83,1.83,0,0,1,9.17,24Z" fill="currentColor" /><path d="M2.22,17.48A2.22,2.22,0,0,1,0,15.27,2.27,2.27,0,0,1,2.27,13H3.75a.74.74,0,0,1,.73.74v1.48A2.26,2.26,0,0,1,2.22,17.48Z" fill="currentColor" /><path d="M10.27,4.48H8.78A2.26,2.26,0,0,1,6.52,2.22,2.21,2.21,0,0,1,8.74,0,2.27,2.27,0,0,1,11,2.27V3.75A.73.73,0,0,1,10.27,4.48Z" fill="currentColor" /><path d="M15.26,24A2.27,2.27,0,0,1,13,21.73V20.25a.73.73,0,0,1,.73-.73h1.49a2.26,2.26,0,0,1,2.26,2.26A2.21,2.21,0,0,1,15.26,24Z" fill="currentColor" /><path d="M21.73,11H20.25a.74.74,0,0,1-.73-.74V8.78a2.26,2.26,0,0,1,2.26-2.26A2.22,2.22,0,0,1,24,8.73,2.27,2.27,0,0,1,21.73,11Z" fill="currentColor" /></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={24} width={24} ><path d="M12,.28A12,12,0,0,0,8.28,23.69l.28,0a1,1,0,0,0,.7-.24,1.05,1.05,0,0,0,.36-.82v-.21c0-.17,0-.4,0-1.09A.49.49,0,0,0,9.43,21a.5.5,0,0,0-.41-.1c-2.69.58-3.26-1.1-3.29-1.21A4.64,4.64,0,0,0,4,17.5l-.15-.11a.73.73,0,0,1,.38-.07,1.48,1.48,0,0,1,1.14.88,3,3,0,0,0,4,1.16A.53.53,0,0,0,9.67,19a2,2,0,0,1,.56-1.22.5.5,0,0,0,.15-.53.49.49,0,0,0-.42-.35c-2.37-.27-4.8-1.1-4.8-5.19A4,4,0,0,1,6.22,8.93a.49.49,0,0,0,.09-.52A3.56,3.56,0,0,1,6.32,6,5.57,5.57,0,0,1,8.84,7.15a.48.48,0,0,0,.42.06A10.66,10.66,0,0,1,12,6.85a10.31,10.31,0,0,1,2.75.36.46.46,0,0,0,.41-.06A5.53,5.53,0,0,1,17.68,6a3.54,3.54,0,0,1,0,2.38.48.48,0,0,0,.1.52,4,4,0,0,1,1.05,2.75c0,4.1-2.43,4.92-4.81,5.18a.49.49,0,0,0-.42.35.49.49,0,0,0,.15.52,2.23,2.23,0,0,1,.61,1.75v3.18a1.06,1.06,0,0,0,.37.82,1.18,1.18,0,0,0,1.06.19A12,12,0,0,0,12,.28Z" fill="currentColor" /></svg>
        </div> */}
      </main>

      <section className="primary max-w-4xl mx-auto">
        <div className="mx-auto">
          <h2 className="sr-only">A better way to send money.</h2>
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-8 w-8 items-center justify-center rounded-md icon-bg text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="ml-12 text-lg font-medium leading-6 text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <h4 className="mt-36 text-white text-2xl">Easy to use!</h4>
        <Tab.Group>
          <Tab.List className="">
            {frameworks.map((fm) => (
              <Tab key={fm}></Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {frameworks.map((fm, idx) => (
              <Tab.Panel key={idx}>
                <SyntaxHighlighter language="jsx" style={oneDark} className="rounded-lg shadow">
                  {code[fm]}
                </SyntaxHighlighter>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>

      <footer className="flex justify-center py-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6"
        >
          Powered by Web3.Storage
        </a>
      </footer>

      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <linearGradient id="iconGradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#d726d7" />
          <stop offset="50%" stopColor="#3064e0" />
          <stop offset="100%" stopColor="#31e7ea" />
        </linearGradient>
      </svg>
    </div>
  )
}

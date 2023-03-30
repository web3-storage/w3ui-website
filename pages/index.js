import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { components } from '../utils';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Fragment } from 'react';
import useScrollPosition from '@react-hook/window-scroll'

export default function Home() {
  const scrollY = useScrollPosition(60 /*fps*/)

  return (
    <div>
      <Head>
        <title>w3ui — Headless, type-safe, UI components for Web3.Storage IPFS upload APIs</title>
        <meta name="description" content="Headless, type-safe, UI components for React, vanilla JS, Vue, Solid, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${scrollY > 10 && 'scrolled'}`}>
        <section className={`min-h-screen flex flex-col justify-center text-center text-lg`}>
          <Header />
          <div className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-10 md:px-20">
            <h1 className="text-3xl lg:text-3xl xl:text-5xl font-400 mx-auto !leading-snug my-4">
              Headless, type-safe, UI components for the next generation of web3.storage APIs.
            </h1>

            <p className="text-lg xl:text-xl text-gray-400 mb-8 xl:max-w-4xl mx-auto !leading-relaxed xl:mb-2">Build production ready apps or awesome demos for hackathons that use the web3.storage service for storing content addressed IPLD data on IPFS and Filecoin. Pick a supported framework or go vanilla and spin up a Web 3.0 application using headless components that let YOU choose the theme and interactions.</p>

            <p className="text-gray-400 mt-16 mb-6"><strong className="text-white font-semibold">Supported frameworks:</strong> React, Solid, Vue</p>

            <section className="w-full max-w-7xl mx-auto flex mb-36">
              <div className="grid w-full justify-center sm:grid-cols-3 gap-2 lg:gap-8 gap-y-16">
                {components.map(comp => (
                  <Fragment key={comp.title}>
                    <Link href={`/${comp.id}`}>
                      <div key={comp.title}>
                        <a className={`${comp.class} card relative rounded-xl shadow-xl p-6 xl:p-8 max-w-sm bg-opacity-75 hover:bg-opacity-100 transition flex`}>
                          <Image src={`${comp.svg}`} alt={`${comp.id}`} width="400" height="200" />
                        </a>
                        <h2 className="text-xl font-bold mt-4">{comp.title}</h2>
                        <p className="text-gray-400 text-sm">{comp.desc}</p>
                      </div>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

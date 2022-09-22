import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PageHead } from '../components/PageHead';
import { ServerStackIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';


export default function UploaderPage() {
  const features = [
    {
      name: 'Automatically Chunk and Process',
      description: 'All files large or small or content addressed, chunked and serialized ensuring top tier reliability',
      icon: ServerStackIcon,
    },
    {
      name: 'Global Scalability & Availability',
      description: 'Using the IPFS blockstore your files are available almost immediately in a variety of gateways',
      icon: GlobeAsiaAustraliaIcon,
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
    fetch('https://api.github.com/repos/web3-storage/w3ui/contents/examples/react/multi-file-upload/src/ContentPage.js')
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
              title="A file upload component to simplify the next web3.storage data uptake."
              desc="Tools to build content addressed datastructures, serialize them and send them to the service. Automatically split large uploads into mutliple parts and send them quickly to a massively scalable IPFS blockstore for almost immediate availability from IPFS HTTP Gateways and speedy aggregation and inclusion in Filecoin deals."
              id="uploader"
            />

            <ComponentFeatures features={features} />

          </div>
        </section>
      </main>

      <CodeTabs frameworks={frameworks}/>

      <Footer />
    </div>
  )
}
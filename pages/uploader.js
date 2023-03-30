import { PageHead } from '../components/PageHead';
import { ServerStackIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

import reactSample from '../sample-code/react/uploader.jsx'
import solidSample from '../sample-code/solid/uploader.js'
import vueSample from '../sample-code/vue/uploader.vue'

export default function UploaderPage() {
  const scrollY = useScrollPosition(60 /*fps*/)
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
  const frameworks = [
    {
      id: 'react',
      title: 'React',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-react-file-upload-xhwue8',
      code: reactSample,
    },
    {
      id: 'solid',
      title: 'Solid',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-solid-file-upload-zzr0yc',
      code: solidSample,
    },
    {
      id: 'vue',
      title: 'Vue',
      language: 'htmlbars',
      link: 'https://codesandbox.io/s/w3ui-example-vue-file-upload-lx572o',
      code: vueSample, 
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
              title="A file upload component to simplify web3.storage data uptake."
              desc="Tools to build content addressed datastructures, serialize them and send them to the service. Automatically split large uploads into multiple parts and send them quickly to a massively scalable IPFS blockstore for almost immediate availability from IPFS HTTP Gateways and speedy aggregation and inclusion in Filecoin deals."
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
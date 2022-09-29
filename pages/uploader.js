import { PageHead } from '../components/PageHead';
import { ServerStackIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

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
      link: 'https://codesandbox.io/s/w3ui-example-react-file-upload-l9bsn3',
      code: `
import { useState } from 'react'
import { useUploader } from '@w3ui/react-uploader'

export default function Component () {
  const { uploader } = useUploader()
  const [file, setFile] = useState(null)
  const [cid, setCid] = useState('')

  const handleUploadSubmit = async e => {
    e.preventDefault()
    // Build a DAG from the file data to obtain the root CID.
    const { cid, car } = await uploader.encodeFile(file)
    // Upload the DAG to the service.
    await uploader.uploadCar(car)
    setCid(cid)
  }
  
  if (cid) {
    return (
      <div>
        <h1>Done!</h1>
        <p>{cid}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleUploadSubmit}>
      <label htmlFor='file'>File:</label>
      <input id='file' type='file' onChange={e => setFile(e.target.files[0])} required />
      <button type='submit'>Upload</button>
    </form>
  )
}
      `
    },
    {
      id: 'solid',
      title: 'Solid',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-solid-file-upload-14wstq',
      code: `
import { createSignal, Switch, Match } from 'solid-js'
import { useUploader } from '@w3ui/solid-uploader'

export default function Component () {
  const [, uploader] = useUploader()
  const [file, setFile] = createSignal(null)
  const [cid, setCid] = createSignal('')

  const handleUploadSubmit = async e => {
    e.preventDefault()
    // Build a DAG from the file data to obtain the root CID.
    const { cid, car } = await uploader.encodeFile(file())
    // Upload the DAG to the service.
    await uploader.uploadCar(car)
    setCid(cid)
  }

  return (
    <Switch>
      <Match when={cid() !== ''}>
        <div>
          <h1>Done!</h1>
          <p>{cid}</p>
        </div>
      </Match>
      <Match when={cid() === ''}>
        <form onSubmit={handleUploadSubmit}>
          <label htmlFor='file'>File:</label>
          <input id='file' type='file' onChange={e => setFile(e.target.files[0])} required />
          <button type='submit'>Upload</button>
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
      link: 'https://codesandbox.io/s/w3ui-example-vue-file-upload-vic3gf',
      code: `
<script>
import { UploaderProviderInjectionKey } from '@w3ui/vue-uploader'
export default {
  inject: {
    encodeFile: { from: UploaderProviderInjectionKey.encodeFile },
    uploadCar: { from: UploaderProviderInjectionKey.uploadCar }
  },
  data () {
    return { file: null, cid: null }
  },
  methods: {
    async handleUploadSubmit (e) {
      e.preventDefault()
      // Build a DAG from the file data to obtain the root CID.
      const { cid, car } = await this.encodeFile(this.file)
      // Upload the DAG to the service.
      await this.uploadCar(car)
      this.cid = cid.toString()
    },
    handleFileChange (e) {
      e.preventDefault()
      this.file = e.target.files[0]
    }
  }
}
</script>
<template>
  <div v-if="cid !== ''">
    <h1>Done!</h1>
    <p>{{cid}}</p>
  </div>
  <form v-if="!cid" @submit="handleUploadSubmit">
    <label htmlFor='file'>File:</label>
    <input id='file' type='file' @change="handleFileChange" required />
    <button type='submit'>Upload</button>
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
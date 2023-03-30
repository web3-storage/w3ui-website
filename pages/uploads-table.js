import { PageHead } from '../components/PageHead';
import { CodeBracketSquareIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

import reactSample from '../sample-code/react/uploads-table.jsx'
import solidSample from '../sample-code/solid/uploads-table.js'
import vueSample from '../sample-code/vue/uploads-table.vue'

export default function UploadsTablePage() {
  const scrollY = useScrollPosition(60 /*fps*/)
  const features = [
    {
      name: 'Built-in Data "Insights"',
      description: 'Data is processed to include pathing, possibly malware and keywords to expand upload insights',
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Advanced Search',
      description: 'Filter and sort by multiple fields as well as by scoped auth keys for those who were delegated access',
      icon: MagnifyingGlassPlusIcon,
    }
  ]
  const frameworks = [
    {
      id: 'react',
      title: 'React',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-react-uploads-list-twg62y',
      code: reactSample,
    },
    {
      id: 'solid',
      title: 'Solid',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-solid-uploads-list-8lhz7d',
      code: solidSample,
    },
    {
      id: 'vue',
      title: 'Vue',
      language: 'htmlbars',
      link: 'https://codesandbox.io/s/w3ui-example-vue-uploads-list-ubd02r',
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
              title="An uploads list component to simplify the next web3.storage data browsing."
              desc="Obtain paginated listings of items uploaded to the service, optionally filtered and sorted by multiple fields and scoped to the auth keys that were delegated capabilities to upload. Listings also include processed “insights” into data structures which may include pathing data, malware detection and search keywords."
              id="table"
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
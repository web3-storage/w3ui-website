import { PageHead } from '../components/PageHead';
import { CodeBracketSquareIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

import reactSample from '../sample-code/react/uploads-table.jsx'

export default function UploadsTablePage() {
  const scrollY = useScrollPosition(60 /*fps*/)
  const features = [
    {
      name: 'Simple and Flexible List Component',
      description: 'Display your w3up data the way you want with our headless list component.',
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Easy Pagination',
      description: 'Headless components make it easy to navigate forward and backward through paginated lists of your w3up data.',
      icon: DocumentIcon,
    }
  ]
  const frameworks = [
    {
      id: 'react',
      title: 'React',
      language: 'jsx',
      // TODO: revive after codesandbox is working again
      //link: 'https://codesandbox.io/s/w3ui-example-react-uploads-list-twg62y',
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
              title="An uploads list component to simplify web3.storage data browsing."
              desc="Obtain paginated listings of items uploaded to the service."
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
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PageHead } from '../components/PageHead';
import { CodeBracketSquareIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';

export default function UploadsTablePage() {
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
    fetch('https://api.github.com/repos/web3-storage/w3ui/contents/examples/react/uploads-list/src/ContentPage.js')
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
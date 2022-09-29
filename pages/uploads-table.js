import { PageHead } from '../components/PageHead';
import { CodeBracketSquareIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import { ComponentIntro } from '../components/ComponentIntro';
import { ComponentFeatures } from '../components/ComponentFeatures';
import { Footer } from '../components/Footer';
import { CodeTabs } from '../components/CodeTabs';
import useScrollPosition from '@react-hook/window-scroll'

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
      link: 'https://codesandbox.io/s/w3ui-example-react-uploads-list-5sles5',
      code: `
import { useState } from 'react'
import { useUploadsList } from '@w3ui/react-uploads-list'

export default function Component () {
  const { loading, data, error, reload } = useUploadsList()
  if (error) return <p>⚠️ {err.message}</p>

  return (
    <div>
      <table>
        {data.map(cid => (
          <tr key={cid}>
            <td>{cid}</td>
          </tr>
        ))}
      </table>
      <button type='button' onClick={reload}>🔄 Refresh</button>
      {loading ? <p>Loading...</p> : null}
    </div>
  )
}
      `
    },
    {
      id: 'solid',
      title: 'Solid',
      language: 'jsx',
      link: 'https://codesandbox.io/s/w3ui-example-solid-uploads-list-yxqm3e',
      code: `
import { AuthProvider, useAuth } from '@w3ui/solid-wallet'
import { createUploadsListResource } from '@w3ui/solid-uploads-list'

export default function Component () {
  const [auth] = useAuth()
  const [data, { refetch }] = createUploadsListResource(() => auth.identity, { initialValue: [] })

  return (
    <div>
      <Switch>
        <Match when={data.state === 'errored'}>
          <p>⚠️ {err.message}</p>
        </Match>
        <Match when={data.state === 'ready'}>
          <table>
            {data().map(cid => (
              <tr key={cid}>
                <td>{cid}</td>
              </tr>
            ))}
          </table>
        </Match>
      </Switch>
      <button type='button' onClick={refetch}>🔄 Refresh</button>
      {data.loading ? <p>Loading...</p> : null}
    </div>
  )
}
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
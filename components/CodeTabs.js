import { Tab } from '@headlessui/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

export const CodeTabs = ({ frameworks }) => {
    return (
        <>
            {frameworks && (
                <section className="primary max-w-4xl mx-auto">
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
                                        {fm.id === 'react' && fm.code}
                                    </SyntaxHighlighter>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </section>
            )}
        </>
    )
}
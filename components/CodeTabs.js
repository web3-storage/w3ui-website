import { Tab } from '@headlessui/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

export const CodeTabs = ({ frameworks }) => {
    return (
        <>
            {frameworks && (
                <section className="primary max-w-4xl mx-auto">
                    <Tab.Group>
                        <Tab.List className="flex gap-8 justify-center">
                            {frameworks.map((fm) => (
                                <Tab key={fm.id} className="">
                                    {({ selected }) => (
                                        <button className={`px-8 py-5 rounded-t-md ${selected ? 'bg-[#282C34] text-white' : ''}`}>
                                            {fm.title}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="">
                            {frameworks.map((fm, idx) => (
                                <Tab.Panel key={idx}>
                                    <SyntaxHighlighter language={fm.language} style={oneDark} className="rounded-lg shadow !p-6">
                                        {fm.code}
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
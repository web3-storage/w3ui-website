import { Tab } from '@headlessui/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';

export const CodeTabs = ({ frameworks }) => {
    return (
        <>
            {frameworks && (
                <section className="max-w-5xl mx-auto mb-24 px-6">
                    <Tab.Group>
                        <Tab.List className="flex gap-4 ml-6 justify-start">
                            {frameworks.map((fm) => (
                                <Tab key={fm.id} className="">
                                    {({ selected }) => (
                                        <span className={`block px-8 py-4 rounded-t-md ${selected ? 'bg-[#282C34] text-white' : ''}`}>
                                            {fm.title}
                                        </span>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="">
                            {frameworks.map((fm, idx) => (
                                <Tab.Panel key={idx}>
                                    <div className="relative">
                                        <SyntaxHighlighter language={fm.language} style={oneDark} className="rounded-lg shadow !p-6">
                                            {fm.code}
                                        </SyntaxHighlighter>
                                        {fm.link && (
                                            <a href={fm.link} target="_blank" rel="noreferrer" className="inline-block px-6 py-2 border b-white text-sm rounded-md shadow-md mt-8 hover:bg-gray-900">View on codesandbox.io</a>
                                        )}
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </section>
            )}
        </>
    )
}
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { components, examples, APIRefs } from '../utils';
import Image from 'next/image';

export const Nav = () => {
    return (
        <>
            <Menu as="a" className="relative">
                <Menu.Button className="hover:text-gray-300 transition-all">Components</Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute text-left right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {components.map(comp => (
                            <>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={`/${comp.id}`}>
                                            <div className="grid grid-cols-3 items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer transition-all">
                                                <div className={`${comp.class} relative rounded-xl shadow-xl flex items-center justify-center`}>
                                                    <Image src={`${comp.svg}`} alt={`${comp.id}`} width="80" height="80" />
                                                </div>
                                                <div className="col-span-2 py-2">
                                                    <h2 className="text-lg text-gray-800">{comp.title}</h2>
                                                    <p className="text-gray-500 text-sm">{comp.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
            <Menu as="a" className="relative">
                <Menu.Button className="hover:text-gray-300 transition-all">Examples</Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute text-left right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {examples.map(ex => (
                            <>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={`${ex.link}`}>
                                            <a className={`block gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all ${ex.disabled && 'opacity-50 pointer-events-none'}`}>
                                                <h2 className="text-base text-gray-800">{ex.title}</h2>
                                            </a>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
            <Menu as="a" className="relative">
                <Menu.Button className="hover:text-gray-300 transition-all">API Reference</Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute text-left right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {APIRefs.map(apiRef => (
                            <>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={`${apiRef.link}`}>
                                            <a className={`block gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all ${apiRef.disabled && 'opacity-50 pointer-events-none'}`}>
                                                <h2 className="text-base text-gray-800">{apiRef.title}</h2>
                                            </a>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
            <Link href={`https://github.com/web3-storage/w3ui`}>
                <a className="hover:text-gray-300 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={24} width={24} ><path d="M12,.28A12,12,0,0,0,8.28,23.69l.28,0a1,1,0,0,0,.7-.24,1.05,1.05,0,0,0,.36-.82v-.21c0-.17,0-.4,0-1.09A.49.49,0,0,0,9.43,21a.5.5,0,0,0-.41-.1c-2.69.58-3.26-1.1-3.29-1.21A4.64,4.64,0,0,0,4,17.5l-.15-.11a.73.73,0,0,1,.38-.07,1.48,1.48,0,0,1,1.14.88,3,3,0,0,0,4,1.16A.53.53,0,0,0,9.67,19a2,2,0,0,1,.56-1.22.5.5,0,0,0,.15-.53.49.49,0,0,0-.42-.35c-2.37-.27-4.8-1.1-4.8-5.19A4,4,0,0,1,6.22,8.93a.49.49,0,0,0,.09-.52A3.56,3.56,0,0,1,6.32,6,5.57,5.57,0,0,1,8.84,7.15a.48.48,0,0,0,.42.06A10.66,10.66,0,0,1,12,6.85a10.31,10.31,0,0,1,2.75.36.46.46,0,0,0,.41-.06A5.53,5.53,0,0,1,17.68,6a3.54,3.54,0,0,1,0,2.38.48.48,0,0,0,.1.52,4,4,0,0,1,1.05,2.75c0,4.1-2.43,4.92-4.81,5.18a.49.49,0,0,0-.42.35.49.49,0,0,0,.15.52,2.23,2.23,0,0,1,.61,1.75v3.18a1.06,1.06,0,0,0,.37.82,1.18,1.18,0,0,0,1.06.19A12,12,0,0,0,12,.28Z" fill="currentColor" /></svg>
                </a>
            </Link>
        </>
    ) 
}
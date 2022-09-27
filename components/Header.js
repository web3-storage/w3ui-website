import { useState } from 'react';
import Link from 'next/link'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav';

export const Header = () => {
    const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
    return (
        <div className="flex flex-wrap w-full justify-between items-center px-10 md:px-20 py-10 md:py-20 mb-6">
            <Link href="/">
                <a>
                    <div className="flex items-center justify-center gap-2 poin">
                        <svg className="site-logo-image text-white" width="40" viewBox="0 0 27.2 27.18" xmlns="http://www.w3.org/2000/svg"><path d="M13.6 27.18A13.59 13.59 0 1127.2 13.6a13.61 13.61 0 01-13.6 13.58zM13.6 2a11.59 11.59 0 1011.6 11.6A11.62 11.62 0 0013.6 2z" fill="currentColor"></path><path d="M12.82 9.9v2.53h1.6V9.9l2.09 1.21.77-1.21-2.16-1.32 2.16-1.32-.77-1.21-2.09 1.21V4.73h-1.6v2.53l-2-1.21L10 7.26l2.2 1.32L10 9.9l.78 1.21zM18 17.79v2.52h1.56v-2.52L21.63 19l.78-1.2-2.16-1.33 2.16-1.28-.78-1.19-2.08 1.2v-2.58H18v2.56L15.9 14l-.77 1.2 2.16 1.32-2.16 1.33.77 1.15zM8.13 17.79v2.52h1.56v-2.52L11.82 19l.77-1.2-2.16-1.33 2.12-1.28-.73-1.24-2.13 1.23v-2.56H8.13v2.56L6.05 14l-.78 1.2 2.16 1.3-2.16 1.33.78 1.17z" fill="currentColor"></path></svg>
                        <h1 className="text-white text-2xl tracking-wider">W3:UI</h1>
                    </div>
                </a>
            </Link>

            <nav className="hidden md:visible justify-end items-center gap-8 md:flex ml-auto">
                <Nav />
            </nav>

            <button className="block md:hidden ml-auto" onClick={() => setIsNavDrawerOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            <div className={`md:hidden ${!isNavDrawerOpen ? '-translate-x-full' : 'translate-x-0'} transition-all fixed top-0 left-0 z-10 bg-black flex w-screen h-screen flex-col text-white items-start p-12 text-left justify-center gap-2 overflow-auto`}>
                <MobileNav />

                <button onClick={() => setIsNavDrawerOpen(false)} className="fixed top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="flex justify-center py-8">
            <div className="mx-auto w-full max-w-6xl overflow-hidden py-12 px-10 md:px-20">

                <div className="flex flex-col sm:flex-row justify-between gap-y-12 gap-x-24">
                    <div className="">
                        <h5 className="text-lg mb-8 leading-none text-gray-400">Support</h5>
                        <nav className="flex flex-col gap-2">
                            <a className="underline" href="https://discord.com/channels/806902334369824788/864892166470893588" target="_blank" rel="noreferrer">Get Help</a>
                            <a className="underline" href="https://github.com/web3-storage/w3ui/issues" target="_blank" rel="noreferrer">Open an Issue</a>
                        </nav>
                    </div>

                    <div className="">
                        <h5 className="text-lg mb-8 leading-none text-gray-400">Community</h5>
                        <nav className="flex flex-col gap-2">
                            <a className="underline" href="https://web3.storage/" target="_blank" rel="noreferrer">web3.storage</a>
                            <a className="underline" href="https://nft.storage/" target="_blank" rel="noreferrer">NFT.Storage</a>
                            <p><a className="underline" href="https://ipfs.io/" target="_blank" rel="noreferrer">IPFS</a> &amp; <a className="underline" href="https://filecoin.io/" target="_blank" rel="noreferrer">Filecoin</a></p>
                        </nav>
                    </div>

                    <div className="sm:ml-auto flex flex-col gap-2 text-gray-400">
                        <p>Certified Web 3.0</p>
                        <p>100% Free and Open Source</p>
                        <p>Licensed Apache-2.0 OR MIT</p>
                    </div>
                </div>

                <p className="mt-24 flex justify-center items-center space-x-6">
                    <a href="" className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12,.28A12,12,0,0,0,8.28,23.69l.28,0a1,1,0,0,0,.7-.24,1.05,1.05,0,0,0,.36-.82v-.21c0-.17,0-.4,0-1.09A.49.49,0,0,0,9.43,21a.5.5,0,0,0-.41-.1c-2.69.58-3.26-1.1-3.29-1.21A4.64,4.64,0,0,0,4,17.5l-.15-.11a.73.73,0,0,1,.38-.07,1.48,1.48,0,0,1,1.14.88,3,3,0,0,0,4,1.16A.53.53,0,0,0,9.67,19a2,2,0,0,1,.56-1.22.5.5,0,0,0,.15-.53.49.49,0,0,0-.42-.35c-2.37-.27-4.8-1.1-4.8-5.19A4,4,0,0,1,6.22,8.93a.49.49,0,0,0,.09-.52A3.56,3.56,0,0,1,6.32,6,5.57,5.57,0,0,1,8.84,7.15a.48.48,0,0,0,.42.06A10.66,10.66,0,0,1,12,6.85a10.31,10.31,0,0,1,2.75.36.46.46,0,0,0,.41-.06A5.53,5.53,0,0,1,17.68,6a3.54,3.54,0,0,1,0,2.38.48.48,0,0,0,.1.52,4,4,0,0,1,1.05,2.75c0,4.1-2.43,4.92-4.81,5.18a.49.49,0,0,0-.42.35.49.49,0,0,0,.15.52,2.23,2.23,0,0,1,.61,1.75v3.18a1.06,1.06,0,0,0,.37.82,1.18,1.18,0,0,0,1.06.19A12,12,0,0,0,12,.28Z" fill="currentColor" /></svg>
                    </a>

                    <a href="" className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.19A.49.49,0,0,1,22,5.1a.5.5,0,0,1,0-.43l.45-.89a.5.5,0,0,0-.59-.7l-2,.56a.48.48,0,0,1-.43-.09,5,5,0,0,0-8,4v.36a.25.25,0,0,1-.22.25c-2.81.33-5.5-1.1-8.4-4.44a.5.5,0,0,0-.51-.16A.49.49,0,0,0,2,4a7.52,7.52,0,0,0,.46,4.92.27.27,0,0,1,0,.26.24.24,0,0,1-.25.1L1.08,9.06a.52.52,0,0,0-.44.15.51.51,0,0,0-.13.44,5.15,5.15,0,0,0,2.37,3.78.25.25,0,0,1,.12.23.24.24,0,0,1-.15.22l-.54.21a.53.53,0,0,0-.28.29.51.51,0,0,0,0,.4,4.36,4.36,0,0,0,3.2,2.48.27.27,0,0,1,.19.22.26.26,0,0,1-.15.26A11,11,0,0,1,1,18.56a.49.49,0,0,0-.2,1,19.92,19.92,0,0,0,8.14,1.93,12.6,12.6,0,0,0,7-2A12.48,12.48,0,0,0,21.5,9.06V8.19a.49.49,0,0,1,.18-.38Z" fill="currentColor" /></svg>
                    </a>

                    <a href="" className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M22.67,1a1,1,0,0,0-1-1H2.34a1,1,0,0,0-1,1V20.33a1,1,0,0,0,1,1H15.6a1,1,0,0,0,.78-.37,2.25,2.25,0,0,0,.21-1.31.2.2,0,0,1,.1-.22.21.21,0,0,1,.24,0l4,4.25a1,1,0,0,0,.7.28,1.14,1.14,0,0,0,.4-.08,1,1,0,0,0,.61-.93Zm-4,13.06A6.25,6.25,0,0,1,14.85,16l-.41,0a.68.68,0,0,1-.51-.21l-.55-.72a.24.24,0,0,0-.24-.1c-.23,0-.46.06-.7.08a10.45,10.45,0,0,1-1.48,0,8.88,8.88,0,0,1-1-.1.26.26,0,0,0-.24.1l-.52.7a.74.74,0,0,1-.76.21,6.41,6.41,0,0,1-2.4-.7,5.32,5.32,0,0,1-1.62-1.26.68.68,0,0,1-.15-.43A14.92,14.92,0,0,1,6.2,6.7a1,1,0,0,1,.19-.21A7.28,7.28,0,0,1,8,5.61a6.32,6.32,0,0,1,1.55-.4.59.59,0,0,1,.68.37l.07.14a.26.26,0,0,0,.25.13l.52,0a11,11,0,0,1,1.29,0l.25,0a.27.27,0,0,0,.25-.14v0L13,5.48a.57.57,0,0,1,.53-.28,4.43,4.43,0,0,1,.81.14,7.2,7.2,0,0,1,2.43,1.15,1.26,1.26,0,0,1,.2.2,15.32,15.32,0,0,1,1.89,6.81A.7.7,0,0,1,18.68,14.07Z" fill="currentColor" /><path d="M13.57,13a1.47,1.47,0,0,1-1-.36,1.84,1.84,0,0,1-.21-2.54A1.48,1.48,0,0,1,14.63,10a1.84,1.84,0,0,1,0,2.57A1.49,1.49,0,0,1,13.57,13Z" fill="currentColor" /><path d="M9.57,13a1.46,1.46,0,0,1-1.06-.44A1.85,1.85,0,0,1,8.5,10,1.48,1.48,0,0,1,9.56,9.5h0a1.48,1.48,0,0,1,1,.44,1.84,1.84,0,0,1,0,2.57A1.62,1.62,0,0,1,9.57,13Z" fill="currentColor" /></g></svg>
                    </a>
                </p>
                <p className="mt-8 text-center">
                    Made with ❤️ by <a href="https://dag.house/">DAG House</a>
                </p>
            </div>
        </footer>
    )
}
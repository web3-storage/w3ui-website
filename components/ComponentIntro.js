import Image from "next/image"

export const ComponentIntro = ({ title, desc, id }) => {
    return (
        <>
            <div className="md:flex justify-between items-center gap-12">
                <div className={`ui-${id} card relative rounded-xl shadow-xl p-6 xl:p-8 max-w-sm transition mb-6 md:mb-0`}>
                    <Image src={`/ui-${id}.svg`} alt="ui-wallet" width="400" height="200" />
                </div>
                <div className="text-left">
                    <p className="text-2xl lg:text-2xl xl:text-3xl xl:max-w-4xl font-400 leading-normal my-4">
                        {title}
                    </p>
                    <p className="text-lg xl:text-xl text-gray-400 mb-8 xl:max-w-4xl mx-auto !leading-relaxed xl:mb-2">{desc}</p>
                </div>
            </div>
            <p className="text-gray-400 my-16 text-left md:text-center"><strong className="text-white font-semibold">Supported frameworks:</strong> React, React Native, Vue, Solid, Svelte</p>
        </>
    )
}
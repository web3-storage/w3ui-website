export const ComponentFeatures = ({ features }) => {
    return (
        <>
            <div className="mx-auto">
                <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 md:space-y-0">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md icon-bg text-white">
                                    <feature.icon className="h-12 w-12" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-white">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <p className="mx-auto flex justify-center animate-bounce my-12 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white mt-10" height={24} width={24} ><path d="M19.19,15.53a1,1,0,0,0-1.41,0l-4.78,5V1a1,1,0,0,0-2,0V20.52l-4.78-5a1,1,0,1,0-1.44,1.38l6.5,6.75h0a.9.9,0,0,0,.3.21h0a1,1,0,0,0,.78,0h0a.9.9,0,0,0,.3-.21h0l6.5-6.75A1,1,0,0,0,19.19,15.53Z" fill="currentColor" /></svg>
            </p>

            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
                <linearGradient id="iconGradient" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d726d7" />
                    <stop offset="50%" stopColor="#3064e0" />
                    <stop offset="100%" stopColor="#31e7ea" />
                </linearGradient>
            </svg>
        </>
    )
}
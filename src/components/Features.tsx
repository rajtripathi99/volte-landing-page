const Features = () => {
    return (
        <div className="flex flex-col p-3 md:p-5 lg:p-8 xl:p-10 min-h-auto md:min-h-screen w-full bg-white">
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center gap-4 py-6">
                {/* Heading centered */}
                <div className="text-center">
                    <h1 className="text-xl font-semibold">We're More Than Just Charging <span className="text-[#828282]">We're Your Road Companion</span></h1>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                        <h1 className="text-xl font-semibold">25k</h1>
                        <p className="text-gray-400 text-[10px]">Charging Sessions<br />Initiated</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-semibold">15m</h1>
                        <p className="text-gray-400 text-[10px]">Charging Station<br />Network</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <p className="text-gray-400 text-[10px]">Eco-Friendly<br />Stations</p>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full mt-2">
                    <img src="/images/big-battery.png" alt="battery" className="w-full object-contain rounded-xl" />
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col justify-center gap-5 lg:gap-8">
                {/* Top */}
                <div className="flex items-center justify-between px-2 lg:px-4">
                    {/* Left */}
                    <div>
                        <h1 className="text-xl lg:text-3xl font-semibold max-w-sm lg:max-w-md">We're More Than Just Charging <span className="text-[#828282]">We're Your Road Companion</span></h1>
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-5 lg:gap-12">
                        <div>
                            <h1 className="text-xl lg:text-3xl font-semibold">25k</h1>
                            <p className="text-gray-400 text-xs lg:text-sm">Charging Sessions<br />Initiated</p>
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-3xl font-semibold">15m</h1>
                            <p className="text-gray-400 text-xs lg:text-sm">Charging Station<br />Network</p>
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-3xl font-semibold">90%</h1>
                            <p className="text-gray-400 text-xs lg:text-sm">Eco-Friendly<br />Stations</p>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className="flex items-center justify-center w-full px-2 lg:px-4 flex-1">
                    <img src="/images/big-battery.png" alt="battery" className="max-h-full w-full object-contain rounded-3xl" />
                </div>
            </div>
        </div>
    )
}

export default Features
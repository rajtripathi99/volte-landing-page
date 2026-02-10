const Features = () => {
    return (
        <div className="flex flex-col justify-center p-10 min-h-screen w-full bg-white gap-8">
            {/* Top */}
            <div className="flex items-center justify-between px-4">
                {/* Left */}
                <div>
                    <h1 className="text-3xl font-semibold">We're More Than Just <br /> Charging <span className="text-[#828282]">We're Your Road<br /> Companion</span></h1>
                </div>
                {/* Right */}
                <div className="flex items-center gap-12">
                    <div>
                        <h1 className="text-3xl font-semibold">25k</h1>
                        <p className="text-gray-400 text-sm">Charging Sessions<br />Initiated</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">15m</h1>
                        <p className="text-gray-400 text-sm">Charging Station<br />Network</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">90%</h1>
                        <p className="text-gray-400 text-sm">Eco-Friendly<br />Stations</p>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="flex items-center justify-center w-full px-4 flex-1">
                <img src="/images/big-battery.png" alt="battery" className="max-h-full w-full object-contain rounded-3xl" />
            </div>
        </div>
    )
}

export default Features
const CTA = () => {
    return (
        <div className="flex justify-between items-center p-20 min-h-screen w-full bg-white gap-4">
            {/* Left Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-12 flex flex-col justify-center gap-10 h-[500px] w-[40%]">
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold">Power Up Without <br /> <span className="text-[#828282]">Breaking The Bank</span></h1>
                    <p className="text-gray-500 text-md">Affordable charging made simple! Whether you <br /> need a one-time boost or a subscription plan.</p>
                </div>
                <div className="flex items-center gap-12">
                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                        Book a Call
                    </button>
                    <div>
                        <p className="text-xs text-gray-500">Start on</p>
                        <p className="text-lg font-normal">$2.399</p> 
                    </div>
                </div>
            </div>
            {/* Middle Image */}
            <div className="h-[500px] w-[40%]">
                <img src="/images/cta-left.png" alt="cta-left" className="h-full w-full object-cover rounded-3xl" />
            </div>
            
            {/* Right Image */}
            <div className="h-[500px] w-[20%]">
                <img src="/images/cta-right.png" alt="cta-right" className="h-full w-full object-cover rounded-3xl" />
            </div>
        </div>
    )
}

export default CTA
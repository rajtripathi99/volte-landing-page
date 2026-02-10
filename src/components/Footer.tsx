const Footer = () => {
    return (
        <footer className="min-h-screen w-full bg-white p-20 flex flex-col justify-between">
            <div className="bg-[#F4F4F4] rounded-lg p-4 min-h-screen w-full">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-semibold">
                            It's Time To Take Charge Of Your Ride. Locate <br />
                            Your Nearest Station Or <span className="text-gray-400">Explore Our Subscription <br />
                                Options And Get Started Now!</span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center border border-gray-300 rounded-full w-32 h-32 p-4">
                        <span className="text-[10px] font-medium text-center leading-tight tracking-tight">ELECTRIC<br />VEHICLES</span>
                        <span className="text-2xl">↗</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Bottom Section */}
                <div className="flex justify-between items-start">
                    {/* Left - Logo and Tagline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">VOLTE.</h1>
                        <p className="text-gray-500">
                            Electrifying Innovation For <br />
                            A <span className="text-gray-400">Sustainable World.</span>
                        </p>
                        <div className="flex gap-4 text-gray-600">
                            <a href="#" className="hover:text-black"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="hover:text-black"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-black"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex gap-20">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 text-gray-600">
                            <a href="#" className="hover:text-black">About Us</a>
                            <a href="#" className="hover:text-black">Product</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 text-gray-600">
                            <a href="#" className="hover:text-black">About</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Account</a>
                            <a href="#" className="hover:text-black">Carier</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4 text-gray-600">
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col gap-4 text-gray-600">
                            <a href="#" className="hover:text-black">About Us</a>
                            <a href="#" className="hover:text-black">Product</a>
                            <a href="#" className="hover:text-black">Client</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
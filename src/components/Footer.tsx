import { SocialIcon } from "react-social-icons"

const Footer = () => {
    return (
        <footer className="min-h-auto md:min-h-screen w-full p-2 md:p-4 lg:p-5 xl:p-6 flex">
            <div className="bg-[#F4F4F4] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 xl:p-16 w-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-0">
                    <h1 className="text-black text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold max-w-sm md:max-w-lg lg:max-w-2xl">
                        It's Time To Take Charge Of Your Ride. Locate
                        Your Nearest Station Or <span className="text-[#828282]">Explore Our Subscription
                            Options And Get Started Now!</span>
                    </h1>
                    <img src="/images/hero-cta.svg" alt="cta" className="w-16 h-16 hidden md:block lg:w-36 lg:h-36 xl:w-48 xl:h-48" />
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-5 md:my-8 lg:my-10 xl:my-12"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
                    {/* Left */}
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">VOLTE.</h1>
                        <p className="text-sm md:text-base lg:text-lg text-black">
                            Electrifying Innovation For
                            A <span className="text-[#828282]">Sustainable World.</span>
                        </p>
                        <div className="flex gap-2 md:gap-3 mt-1 md:mt-2">
                            <SocialIcon url="https://linkedin.com/" bgColor="#9CA3AF" style={{ height: 28, width: 28 }} />
                            <SocialIcon url="https://instagram.com/" bgColor="#9CA3AF" style={{ height: 28, width: 28 }} />
                            <SocialIcon url="https://twitter.com/" bgColor="#9CA3AF" style={{ height: 28, width: 28 }} />
                        </div>
                    </div>

                    {/* Right - Navigation Columns */}
                    <div className="flex flex-wrap justify-between md:justify-start gap-x-6 gap-y-4 md:gap-6 lg:gap-14 xl:gap-24 text-xs md:text-sm lg:text-base w-full md:w-auto">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">About Us</a>
                            <a href="#" className="hover:text-black">Product</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">About</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Account</a>
                            <a href="#" className="hover:text-black">Carier</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 4 */}
                        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 text-gray-600">
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
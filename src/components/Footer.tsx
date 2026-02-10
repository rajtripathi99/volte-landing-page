import { SocialIcon } from "react-social-icons"

const Footer = () => {
    return (
        <footer className="min-h-screen w-full p-6 flex">
            <div className="bg-[#F4F4F4] rounded-3xl p-16 w-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex items-center justify-between">
                    <h1 className="text-black text-4xl font-semibold">
                        It's Time To Take Charge Of Your Ride. Locate <br />
                        Your Nearest Station Or <span className="text-[#828282]">Explore Our Subscription <br />
                            Options And Get Started Now!</span>
                    </h1>
                    <img src="/images/hero-cta.svg" alt="cta" className="w-48 h-48" />
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-12"></div>

                {/* Bottom Section */}
                <div className="flex items-start justify-between">
                    {/* Left */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl font-bold">VOLTE.</h1>
                        <p className="text-lg text-black">
                            Electrifying Innovation For <br />
                            A <span className="text-[#828282]">Sustainable World.</span>
                        </p>
                        <div className="flex gap-3 mt-2">
                            <SocialIcon url="https://linkedin.com/" bgColor="#9CA3AF" style={{ height: 32, width: 32 }} />
                            <SocialIcon url="https://instagram.com/" bgColor="#9CA3AF" style={{ height: 32, width: 32 }} />
                            <SocialIcon url="https://twitter.com/" bgColor="#9CA3AF" style={{ height: 32, width: 32 }} />
                        </div>
                    </div>

                    {/* Right - Navigation Columns */}
                    <div className="flex gap-24">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">About Us</a>
                            <a href="#" className="hover:text-black">Product</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">About</a>
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Account</a>
                            <a href="#" className="hover:text-black">Carier</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col gap-3 text-gray-600">
                            <a href="#" className="hover:text-black">Client</a>
                            <a href="#" className="hover:text-black">Services</a>
                            <a href="#" className="hover:text-black">Contact</a>
                        </div>
                        {/* Column 4 */}
                        <div className="flex flex-col gap-3 text-gray-600">
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
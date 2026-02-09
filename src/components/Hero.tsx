import { ArrowRight } from "lucide-react"
import FeatureCard from "./FeatureCard"

export default function Hero() {
    return (
        <section className="w-full min-h-screen overflow-hidden flex bg-[#F6F6F6]">
            {/* Left */}
            <div className="flex flex-col pl-10 pb-6 justify-end w-1/2 gap-20">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Recharge Faster, Travel Further</h1>
                    <p className="text-lg text-[#4F4F4F]">Join the movement toward seamless electric vehicle <br />charging with stations that are easy to find and always <br /> ready when you are.</p>
                    <button className="flex gap-2 items-center bg-black text-white px-4 py-3 rounded-md">Order Now <ArrowRight className='h-5 w-5' /></button>
                </div>
                <div className="flex gap-4">
                    <FeatureCard image="images/feature-left.png" alt="Feature image" />
                    <FeatureCard image="images/feature-right.png" alt="Feature image" />
                </div>
            </div>
            {/* Right */}
            <div className="w-1/2 relative pb-6 flex items-center">
                <div className="absolute top-28 left-40 z-50">
                    <h1 className="text-6xl font-semibold text-left">
                        Electrifying <br />
                        Innovation for a <br />
                        <span className="text-gray-400">Sustainable <br /> World.</span>
                    </h1>
                </div>
                <div className="absolute top-28 right-6 z-50">
                    <img src="/images/hero-cta.svg" alt="Hero CTA" className="w-30 h-30" />
                </div>
                <div className="absolute bottom-0 right-30 pb-12 scale-125">
                    <img src="/images/hero-main.png" alt="Hero image" className="w-full h-full object-contain scale-110" />
                </div>
            </div>
        </section>
    )
}

import { ArrowRight } from "lucide-react"
import FeatureCard from "./FeatureCard"

export default function Hero() {
    return (
        <section className="w-full min-h-auto md:min-h-screen overflow-hidden flex flex-col md:flex-row bg-[#F6F6F6]">
            {/* Mobile: headline + car image on top */}
            <div className="md:hidden w-full pt-16">
                <div className="flex items-start justify-between mb-4 px-4">
                    <h1 className="text-3xl font-semibold text-left mt-6">
                        Electrifying <br />
                        Innovation for a <br />
                        <span className="text-[#828282]">Sustainable <br /> World.</span>
                    </h1>
                    <img src="/images/hero-cta.svg" alt="Hero CTA" className="w-25 h-25 mt-6" />
                </div>
                <div className="w-full">
                    <img src="/images/hero-main.png" alt="Hero image" className="w-full object-contain" />
                </div>
            </div>
            {/* Mobile: bottom content */}
            <div className="md:hidden flex flex-col px-4 pb-6 gap-6">
                <div className="space-y-4">
                    <h1 className="text-lg font-bold mt-6">Recharge Faster, Travel Further</h1>
                    <p className="text-xs text-[#4F4F4F]">Join the movement toward seamless electric vehicle charging with stations that are easy to find and always ready when you are.</p>
                    <button className="flex gap-1.5 items-center bg-black text-white px-3 py-2 rounded-md text-xs">Order Now <ArrowRight className='h-3 w-3' /></button>
                </div>
                <div className="hidden md:flex gap-3 justify-center">
                    <FeatureCard image="images/feature-left.png" alt="Feature image" />
                    <FeatureCard image="images/feature-right.png" alt="Feature image" />
                </div>
            </div>

            {/* Desktop/Tablet: Left */}
            <div className="hidden md:flex flex-col pl-4 md:pl-5 lg:pl-8 xl:pl-10 pb-4 md:pb-6 justify-end w-1/2 gap-6 md:gap-8 lg:gap-16 xl:gap-20">
                <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Recharge Faster, Travel Further</h1>
                    <p className="text-xs md:text-sm lg:text-lg text-[#4F4F4F] max-w-xs md:max-w-sm lg:max-w-md">Join the movement toward seamless electric vehicle charging with stations that are easy to find and always ready when you are.</p>
                    <button className="flex gap-1.5 md:gap-2 items-center bg-black text-white px-3 md:px-4 py-2 md:py-2.5 lg:py-3 rounded-md text-xs md:text-sm lg:text-base">Order Now <ArrowRight className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5' /></button>
                </div>
                <div className="flex gap-2 md:gap-3 lg:gap-4">
                    <FeatureCard image="images/feature-left.png" alt="Feature image" />
                    <FeatureCard image="images/feature-right.png" alt="Feature image" />
                </div>
            </div>
            {/* Desktop/Tablet: Right */}
            <div className="hidden md:flex w-1/2 relative pb-4 md:pb-6 items-center">
                <div className="absolute top-20 md:top-22 lg:top-28 left-8 md:left-14 lg:left-28 xl:left-40 z-50">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-left">
                        Electrifying <br />
                        Innovation for a <br />
                        <span className="text-[#828282]">Sustainable <br /> World.</span>
                    </h1>
                </div>
                <div className="absolute top-20 md:top-22 lg:top-28 right-2 md:right-3 lg:right-6 z-50">
                    <img src="/images/hero-cta.svg" alt="Hero CTA" className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-30 xl:h-30" />
                </div>
                <div className="absolute bottom-0 right-4 md:right-6 lg:right-20 xl:right-30 pb-4 md:pb-6 lg:pb-12 scale-90 md:scale-95 lg:scale-110 xl:scale-125">
                    <img src="/images/hero-main.png" alt="Hero image" className="w-full h-full object-contain scale-90 md:scale-95 lg:scale-105 xl:scale-110" />
                </div>
            </div>
        </section>
    )
}

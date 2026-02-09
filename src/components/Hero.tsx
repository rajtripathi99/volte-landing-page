import { MoveRight } from "lucide-react"
import FeatureCard from "./FeatureCard"

export default function Hero() {
    return (
        <section className="w-full min-h-screen overflow-hidden flex">
            {/* Left */}
            <div className="flex flex-col pl-10 pb-6 justify-end w-1/2 gap-20">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Recharge Faster, Travel Further</h1>
                    <p className="text-lg">Join the movement toward seamless electric vehicle <br />charging with stations that are easy to find and always <br /> ready when you are.</p>
                    <button className="flex gap-2 bg-black text-white px-4 py-3 rounded-md">Order Now <MoveRight /></button>
                </div>
                <div className="flex gap-4">
                    <FeatureCard image="images/feature-left.png" alt="Feature image" />
                    <FeatureCard image="images/feature-right.png" alt="Feature image" />
                </div>
            </div>
            {/* Right */}
            <div className="">

            </div>
        </section>
    )
}

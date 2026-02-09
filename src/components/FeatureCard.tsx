type FeatureCardProps = {
    image: string
    alt?: string
}

export default function FeatureCard({
    image,
    alt = "Feature image",
}: FeatureCardProps) {
    return (
        <div className="relative h-[283px] w-[210px] overflow-hidden rounded-2xl border border-white bg-neutral-100">
            <img
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 flex items-center gap-6 rounded-lg bg-white px-3 py-2 shadow-sm">
                <span className="text-lg font-bold text-black">
                    Read More
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-950">
                    <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
                </span>
            </div>
        </div>
    )
}

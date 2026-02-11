type FeatureCardProps = {
    image: string
    alt?: string
}

export default function FeatureCard({
    image,
    alt = "Feature image",
}: FeatureCardProps) {
    return (
        <div className="relative h-[160px] w-[125px] md:h-[190px] md:w-[150px] lg:h-[250px] lg:w-[190px] xl:h-[283px] xl:w-[210px] overflow-hidden rounded-xl md:rounded-2xl border border-white bg-neutral-100">
            <img
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 lg:bottom-4 lg:left-4 lg:right-4 flex items-center justify-between rounded-lg bg-white px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 shadow-sm">
                <span className="text-[10px] md:text-xs lg:text-base xl:text-lg font-bold text-black">
                    Read More
                </span>

                <span className="flex h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 items-center justify-center rounded-md bg-zinc-950">
                    <span className="ml-0.5 h-0 w-0 border-y-[3px] md:border-y-[4px] lg:border-y-[5px] border-l-[5px] md:border-l-[6px] lg:border-l-[8px] border-y-transparent border-l-white" />
                </span>
            </div>
        </div>
    )
}


import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current
            .getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    return (
        <div className={className} ref={itemRef}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}
const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover
            object-center"
            />
            <div className="relative z-10 flex size-full flex-col
            justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs
                        md:text-base">{description}</p>
                    )}
                </div>
            </div>

        </div>
    )
}

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        UNLOCK THE GRAND LINE'S SECRETS
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Navigate an ever-expanding world where legendary islands, ancient powers, and fated encounters converge into a living tapestry of adventure across the boundless seas.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-97 w-full
        overflowh-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>Grand<b>Line</b></>}
                        description="Your eternal log pose for the high seas of gaming, transforming voyages across every sea and island of play into a legendary treasure hunt where every bounty earned brings you closer to the One Piece." />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3
        gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1
            md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>sh<b>an</b>ks</>}
                            description="A legendary Emperor's treasure collection - the conqueror's haki-infused NFTs destined to rule the New World seas."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32
            md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>lu<b>ff</b>y</>}
                            description="Luffy's Gear 5 - where pirate crews collide and devil fruits awaken!"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>ch<b>opp</b>er</>}
                            description="Your adorable crew medic- boosting your adventures with Rumble Ball!"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between
                bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64
                        text-black">More coming soo<b>n</b>!</h1>

                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center" />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features
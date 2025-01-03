import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { animateWithGsap } from "../../utils/animations"
import {
	macFeaturesImg,
	photoForFeatures1Img,
	photoForFeatures2Img,
	photoForFeatures3Img,
	photoForFeatures4Img,
	photoForFeatures5Img,
	photoForFeatures6Img,
} from "../../utils"

const FeaturesMac = () => {
	useGSAP(() => {
		gsap.to("#features_title", { opacity: 1, y: 0 })
		animateWithGsap("#features_photos", { opacity: 1, y: 0, x: 0, duration: 2, ease: "power1.inOut" }, { toggleActions: "play" })
		animateWithGsap(
			"#features_desc",
			{ opacity: 1, y: 0, duration: 0.7 },
			{ ScrollTrigger: ".features_desc", toggleActions: "play", start: "top 70%" }
		)
	}, [])

	return (
		<section className="bg-black common-padding h-full overflow-hidden ">
			<div className="screen-max-width ">
				<div className="mb-12 w-full">
					<h1 id="features_title" className="section-heading">
						Explore the full story
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center overflow-hidden pointer-events-none">
					<div className="md:mt-32 mt-0 md:mb-24 mb-5 flex flex-col font-semibold">
						<h2 className="md:text-5xl text-3xl mx-auto">Next-level graphics</h2>
						<h2 className="md:text-5xl text-3xl">performance. Game on.</h2>
					</div>
					<div className="flex flex-center flex-col mt-52 relative ">
						<img src={macFeaturesImg} alt="macbook" />
					</div>
					<div>
						<img
							id="features_photos"
							src={photoForFeatures1Img}
							alt="macbook1"
							className="opacity-0 absolute md:top-[400px] md:-left-52 md:translate-x-56 md:translate-y-56 top-[200px] w-1/2 translate-x-20 translate-y-44 left-0"
						/>
						<img
							id="features_photos"
							src={photoForFeatures2Img}
							alt="macbook1"
							className="opacity-0 absolute md:top-[450px]  md:-translate-x-56 md:translate-y-56 md:-right-52 top-[200px] w-1/2 -translate-x-20 translate-y-44 right-0"
						/>
						<img
							id="features_photos"
							src={photoForFeatures3Img}
							alt="macbook1"
							className="opacity-0 absolute md:top-[450px] md:-translate-x-20 md:translate-y-56 md:right-[30%] md:w-1/4 bottom-[200px] w-1/3 -translate-x-20 -translate-y-52 right-0"
						/>
						<img
							id="features_photos"
							src={photoForFeatures4Img}
							alt="macbook1"
							className="opacity-0 absolute md:bottom-[500px] md:-left-32 md:translate-x-56 md:translate-y-0 bottom-[200px] w-1/3 translate-x-20 -translate-y-52 left-0"
						/>
						<img
							id="features_photos"
							src={photoForFeatures5Img}
							alt="macbook1"
							className="opacity-0 absolute bottom-[200px] -translate-x-[400px] -translate-y-72 -right-72 hidden md:block"
						/>
						<img
							id="features_photos"
							src={photoForFeatures6Img}
							alt="macbook1"
							className="opacity-0 absolute bottom-[200px] translate-x-[400px] -translate-y-44 -left-[350px] hidden md:block"
						/>
					</div>
					<div className="mt-24 text-center z-10 relative">
						<p id="features_desc" className="opacity-0 translate-y-24 md:text-2xl text-base md:w-[600px] w-full text-gray-100">
							Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a
							second-generation hardware-accelerated ray tracing engine that renders images faster,{" "}
							<span className="text-white">so gaming feels more immersive and realistic than ever.</span> And Dynamic Caching optimizes fast on-chip
							memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default FeaturesMac

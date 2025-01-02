import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { animateWithGsap } from "../../utils/animations"
import PerformanceCard from "./performance-card"
import { performanceMacVideo } from "../../utils"

const PerformanceMac = () => {
	const videoRef = useRef()

	useGSAP(() => {
		gsap.to("#title", { opacity: 1, y: 0 })
		animateWithGsap("#performance_desc", { opacity: 1, y: 0 }, { ScrollTrigger: "#performance_desc", toggleActions: "play", start: "top 80%" })
		animateWithGsap("#performance_cards", { opacity: 1, y: 0 }, { ScrollTrigger: "#performance_cards", toggleActions: "play", start: "top 65%" })
	}, [])
	return (
		<section className="bg-black h-full common-padding overflow-hidden">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h2 className="font-bold text-white">PERFORMANCE</h2>
					<h1 id="title" className="section-heading">
						Pro all Out.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center">
					<video playsInline preload="auto" autoPlay muted className="w-full rounded-xl mb-24">
						<source ref={videoRef} src={performanceMacVideo} type="video/mp4" />
					</video>
					<div id="performance_desc" className="opacity-0 translate-y-24 md:text-2xl text-base md:w-[750px] w-full text-gray-100 mb-24">
						<p>
							MacBook Pro features the <span className="font-semibold text-white">most advanced lineup of chips ever built for a pro laptop.</span>{" "}
							Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of
							chips gives you the kind of speed and capability you’ve never thought possible. And the powerful Neural Engine makes AI tasks like image
							upscaling and video caption creation as well as on-device Apple Intelligence features fly.
						</p>
					</div>

					<div
						id="performance_cards"
						className="flex flex-col md:flex-row items-center justify-between text-gray-100 font-semibold gap-10 opacity-0 translate-y-24"
					>
						<PerformanceCard howFaster={"3.4x faster"} text={"that M1"} />
						<PerformanceCard howFaster={"3x faster"} text={"that M1 Pro"} />
						<PerformanceCard howFaster={"3.5x faster"} text={"that M1 Max"} />
					</div>
				</div>
			</div>
		</section>
	)
}
export default PerformanceMac

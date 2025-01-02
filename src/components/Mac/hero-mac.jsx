import { useEffect, useState } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { macBookLargeSrc, macBookSmallSrc, macBookTitleImgSrc } from "../../utils"

function HeroMac() {
	const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? macBookSmallSrc : macBookLargeSrc)
	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(macBookSmallSrc)
		} else {
			setVideoSrc(macBookLargeSrc)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleVideoSrcSet)

		return () => {
			window.removeEventListener("resize", handleVideoSrcSet)
		}
	}, [])

	useGSAP(() => {
		gsap.to("#hero", { opacity: 1, delay: 1 })
		gsap.to("#macBookTitle", { opacity: 1, y: 0, delay: 3 })
		gsap.to("#cta", { opacity: 1, y: 0, delay: 3 })
	}, [])

	return (
		<main className="bg-black ">
			<section className="w-full nav-height bg-black ">
				<div className="h-5/6 w-full flex-center flex-col relative">
					<p id="hero" className="hero-title">
						MacBook Pro
					</p>
					<div className="w-full flex-center">
						<video autoPlay muted playsInline={true} key={videoSrc}>
							<source className="w-[100px]" src={videoSrc} type="video/mp4" />
						</video>
					</div>
					<img
						id="macBookTitle"
						className="opacity-0 translate-y-4 absolute top-44 md:top-0 md:w-1/2 w-2/3 mx-auto hidden md:block"
						src={macBookTitleImgSrc}
					/>

					<div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
						<a href="#" className="btn">
							Buy
						</a>
						<p className="font-normal text-xl">From $1599 or $133.25/mo. for 12 mo.*</p>
					</div>
				</div>
			</section>
		</main>
	)
}
export default HeroMac

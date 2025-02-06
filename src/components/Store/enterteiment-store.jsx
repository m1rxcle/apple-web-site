import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

import Slider from "react-slick"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { animateWithGsap } from "../../utils/animations"
import { ScrollTrigger } from "gsap/all"

import CustomNextArrow from "../ui/custom-next-arrow"
import CustomPrevArrow from "../ui/custom-prev-arrow"
import { entImgBigSrc, entImgSmallSrc } from "../../utils"

import { ShoppingBag } from "lucide-react"
import CustomSliderForEnt from "../ui/custom-slider-for-ent"

gsap.registerPlugin(ScrollTrigger)

const EntertainmentStore = () => {
	const imgRef = useRef(null)
	const [imgSrc, setImgSrc] = useState(window.innerWidth < 760 ? entImgSmallSrc : entImgBigSrc)

	const handleImageSrcSet = () => {
		if (window.innerWidth < 760) {
			setImgSrc(entImgSmallSrc)
		} else {
			setImgSrc(entImgBigSrc)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleImageSrcSet)

		return () => {
			window.removeEventListener("resize", handleImageSrcSet)
		}
	}, [])

	useGSAP(() => {
		animateWithGsap(".ent-heading", { opacity: 1, y: 0 })
		gsap.from("#ent-par", { opacity: 0, y: 10, scale: 2.5, duration: 1.5 })

		if (imgRef.current) {
			gsap.to(imgRef.current, {
				scrollTrigger: {
					trigger: "#clip-container",
					start: "center center",
					end: "+=800 center",
					scrub: 0.8,
					pin: true,
					pinSpacing: true,
				},
				width: "80%",
				height: "80%",
				ease: "power2.inOut",
			})
		}
	})

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1.2,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
	}
	return (
		<section className=" min-h-screen w-screen overflow-hidden">
			<div className="common-padding flex flex-col md:justify-center sm:justify-start sm:items-start md:items-center gap-2">
				<p id="ent-par" className="uppercase font-semibold opacity-1 translate-y-0">
					displays, cameras, and audio
				</p>
				<h1 id="ent-heading" className="text-[rgb(134,134,139)] text-5xl font-semibold opacity-0 translate-y-10 ent-heading">
					Let’s be clear. It’s brilliant.
				</h1>
			</div>
			<div id="clip-container" className="h-[100vh] w-[100vw] overflow-hidden relative">
				<img
					ref={imgRef}
					src={imgSrc}
					alt="img-mac"
					className="sm:clipForSmallImg lg:clipForBigImg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
				/>
			</div>
			<div className="md:common-padding sm:pl-10">
				<div className="flex md:flex-row sm:flex-col md:items-center sm:items-start gap-1 justify-start mb-10">
					<h2 className="md:text-2xl sm:text-xl font-semibold">The Apple Store difference.</h2>
					<p className="text-[rgb(134,134,139)] md:text-2xl sm:text-xl">So many reasons to love.</p>
				</div>
				<div>
					<CustomSliderForEnt settings={settings} />

					{/* //TODO: ShoppingBag 
					<div className="fixed bottom-5 right-5">
						<div className="bg-[#1f203a] rounded-full h-20 w-20">
							<ShoppingBag className="absolute top-5 left-5 w-1/2 h-1/2" />
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}
export default EntertainmentStore

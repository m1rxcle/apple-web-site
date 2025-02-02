import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../../utils/animations"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CustomNextArrow from "../ui/custom-next-arrow"
import CustomPrevArrow from "../ui/custom-prev-arrow"
import CustomSlider from "../ui/custom-slider"

const HighlightStore = () => {
	useGSAP(() => {
		animateWithGsap(".section-heading", { opacity: 1, y: 0 })
		animateWithGsap("#features_pretitle", { opacity: 1, y: 0, delay: 0.5 })
		animateWithGsap("#slider", { opacity: 1, y: 0, delay: 1, stagger: 0.25 })
	}, [])

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
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
	}
	return (
		<section className="bg-zinc common-padding w-screen h-full overflow-hidden">
			<div className="flex md:flex-row sm:flex-col md:justify-center md:items-end md:gap-1 sm:items-start mb-24">
				<h1 className="section-heading sm:mb-0">The latest.</h1>
				<p id="features_pretitle" className="opacity-0 translate-y-10 sm:text-2xl  md:text-6xl">
					Take a look at what`s new,right now.
				</p>
			</div>
			<div className="h-full sm:px-10 md:px-0">
				<CustomSlider settings={settings} />
			</div>
		</section>
	)
}
export default HighlightStore

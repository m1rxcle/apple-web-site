import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ProductsList from "./products-list"
import { NavLink } from "react-router-dom"
import { ChevronRightIcon } from "lucide-react"

const HeroStore = () => {
	useGSAP(() => {
		gsap.to(".hero-title", { opacity: 1, delay: 0.5, x: 0 })
		gsap.to(".hero-pretitle", { opacity: 1, delay: 0.5, x: 0 })
		gsap.to("#products", { opacity: 1, delay: 1, ease: "power1.inOut" })
		gsap.from("#products", { scale: 0.3, delay: 1.5, ease: "power1.inOut" })

		gsap.to("#desc-hero", {
			opacity: 1,
			y: 0,
			stagger: 0.5,
			duration: 1,
			scrollTrigger: {
				trigger: "#desc-hero",
				start: "center center",
				toggleActions: "play",
			},
		})
	}, [])
	return (
		<section className="w-full nav-height bg-black relative common-padding ">
			<div className="flex md:flex-row sm:flex-col md:justify-center md:items-center md:gap-1  sm:items-start mb-24 screen-max-width">
				<h1 className="hero-title sm:mb-0 -translate-x-10">Store.</h1>
				<p className="hero-pretitle sm:text-2xl  md:text-3xl translate-x-10 opacity-0">The best way to buy the products you love.</p>
			</div>
			<div id="products" className="opacity-0 flex justify-around items-center overflow-hidden">
				<ProductsList />
			</div>
			<div className="screen-max-width ">
				<div className="flex flex-col justify-center items-center gap-2 common-padding sm:w-full md:w-[60%] text-center mx-auto">
					<h2 id="desc-hero" className="sm:text-xl md:text-2xl opacity-0 translate-y-20">
						Apple Card Monthly Installments
					</h2>
					<p
						id="desc-hero"
						className="opacity-0 translate-y-20 sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-orange-500 to-yellow-500"
					>
						Pay for your new Apple products over time, interest-free when you choose to check out with Apple Card Monthly Installments.
					</p>
					<h2 id="desc-hero" className="opacity-0 translate-y-20 sm:text-xl md:text-2xl">
						Now when you shop at Apple using Apple Card, you can pay monthly at 0% APR for your new iPhone, iPad, Mac, Apple Watch, Apple Vision Pro,
						and eligible accessories when you choose to check out with Apple Card Monthly Installments. And you’ll get 3% Daily Cash back — all up
						front.
					</h2>
					<NavLink id="desc-hero" to="/" className="text-blue opacity-0 translate-y-20">
						<div className="flex items-center">
							<span className="h-[27px]">Learn more</span>
							<ChevronRightIcon size={16} color="#2997FF" />
						</div>
					</NavLink>
				</div>
			</div>
			<div className="min-h-screen"></div>
		</section>
	)
}
export default HeroStore

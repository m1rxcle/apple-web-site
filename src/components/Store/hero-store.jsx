import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ProductsList from "./products-list"

const HeroStore = () => {
	useGSAP(() => {
		gsap.to(".hero-title", { opacity: 1, delay: 0.5, x: 0 })
		gsap.to(".hero-pretitle", { opacity: 1, delay: 0.5, x: 0 })
		gsap.to("#products", { opacity: 1, delay: 1, ease: "power1.inOut" })
		gsap.from("#products", { scale: 0.3, delay: 1.5, ease: "power1.inOut" })
	}, [])
	return (
		<section className="w-full nav-height bg-black relative common-padding ">
			<div className="flex justify-center items-center gap-1 mb-24 screen-max-width">
				<h1 className="hero-title -translate-x-10">Store.</h1>
				<p className="hero-pretitle text-3xl translate-x-10 opacity-0">The best way to buy the products you love.</p>
			</div>
			<div id="products" className="opacity-0 flex justify-around items-center overflow-hidden">
				<ProductsList />
			</div>
		</section>
	)
}
export default HeroStore

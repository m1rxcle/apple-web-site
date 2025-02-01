import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ProductsList from "./products-list"

const HeroStore = () => {
	useGSAP(() => {
		gsap.to(".hero-title", { opacity: 1, y: 0, delay: 0.5 })
	}, [])
	return (
		<section className="w-full nav-height bg-black relative common-padding ">
			<div className="flex items-center gap-2 mb-24 screen-max-width ">
				<h1 className="hero-title">Store.</h1>
				<p className="text-3xl">The best way to buy the products you love.</p>
			</div>
			<div className="flex justify-around items-center overflow-hidden">
				<ProductsList />
			</div>
		</section>
	)
}
export default HeroStore

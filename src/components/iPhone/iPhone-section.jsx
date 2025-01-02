import Features from "./features"
import Footer from "./footer"
import Hero from "./hero"
import Highlights from "./highlights"
import HowItWorks from "./how-it-works"
import Model from "./model"

function IphoneSection() {
	return (
		<main className="bg-black">
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWorks />
			<Footer />
		</main>
	)
}
export default IphoneSection

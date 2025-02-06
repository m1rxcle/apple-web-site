import Footer from "../iPhone/footer"
import EntertainmentStore from "./enterteiment-store"
import HeroStore from "./hero-store"
import HighlightStore from "./hightlight-store"

const StoreSection = () => {
	return (
		<main className="bg-black">
			<HeroStore />
			<HighlightStore />
			<EntertainmentStore />
			<Footer />
		</main>
	)
}
export default StoreSection

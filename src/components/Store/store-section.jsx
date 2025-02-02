import HeroStore from "./hero-store"
import HighlightStore from "./hightlight-store"

const StoreSection = () => {
	return (
		<main className="bg-black">
			<HeroStore />
			<HighlightStore />
		</main>
	)
}
export default StoreSection

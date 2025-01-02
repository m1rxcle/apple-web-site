import Footer from "../iPhone/footer"
import FeaturesMac from "./features-mac"
import HeroMac from "./hero-mac"
import HighlightMac from "./hightlight-mac"
import ModelMac from "./model-mac"
import PerformanceMac from "./perfomance-mac"

function MacSection() {
	return (
		<main className="bg-black">
			<HeroMac />
			<HighlightMac />
			<ModelMac />
			<FeaturesMac />
			<PerformanceMac />
			<Footer />
		</main>
	)
}
export default MacSection

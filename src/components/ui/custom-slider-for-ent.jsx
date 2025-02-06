import Slider from "react-slick"

const CustomSliderForEnt = ({ settings }) => {
	return (
		<Slider {...settings}>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/truck.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							Enjoy <span className="text-[#ff29b0]">two-hour delivery</span>. From an Apple Store,{" "}
							<span className="text-[#ff29b0]">free delivery</span>, or <span className="text-[#ff29b0]">easy pickup</span>.
						</h1>
					</div>
				</div>
			</div>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/watch.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							<span className="text-[#db29ff]">Choose a bank.Pick a case.</span>Make an Apple Watch{" "}
							<span className="text-[#db29ff]">just for them.</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/card.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							Pay in full or <span className="text-[#ff2929]">pay over time.</span> Your choice.
						</h1>
					</div>
				</div>
			</div>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/smile.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							Make them yours. <span className="text-[#ff29b0]">Engrave a mix of emoji,names,and numbers for free.</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/note.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							<span className="text-[#db29ff]">Customize their Mac</span> <span className="text-white">with</span>{" "}
							<span className="text-[#db29ff]">everything from graphics</span> <span className="text-white">to</span>{" "}
							<span className="text-[#db29ff]">storage</span>.
						</h1>
					</div>
				</div>
			</div>
			<div className="hover:scale-[1.01] h-[250px] p-[30px] w-[313px] transition-all duration-300 ease-linear bg-zinc rounded-3xl">
				<div id="slider" className=" relative transition-all duration-300 ease-linear  ">
					<div className="mb-2">
						<img className="" src="/assets/png/screen-share.png" />
					</div>
					<div className="w-3/4">
						<h1 className="md:text-2xl sm:text-xl text-white font-semibold mb-2">
							<span className="text-[#ff2929]">Trade in your current device.</span>Get credit toward a new one.
						</h1>
					</div>
				</div>
			</div>
		</Slider>
	)
}
export default CustomSliderForEnt

import Slider from "react-slick"
import { cardsForCur } from "../../constants"
import { NavLink } from "react-router-dom"

const CustomSlider = ({ settings }) => {
	return (
		<Slider {...settings}>
			{cardsForCur.map((card) => (
				<div className="hover:scale-[1.01] transition-all duration-300 ease-linear">
					<NavLink id="slider" to={card.href} key={card.id} className=" relative transition-all duration-300 ease-linear opacity-0 translate-y-10">
						<div className="h-full w-full">
							<img className="rounded-3xl" src={card.img}></img>
						</div>
						<div className={`absolute top-0 sm:p-8 md:p-10 ${card.isBlack ? "text-black" : "text-white"}`}>
							<h1 className="text-2xl font-semibold mb-2">{card.title}</h1>
							<h2 className="text-sm">{card.pretitle}</h2>
							<p className="text-md w-full">{card.priceMonth ? `From ${card.price} or ${card.priceMonth}.for 12 mo.` : `From ${card.price}`}</p>
						</div>
					</NavLink>
				</div>
			))}
		</Slider>
	)
}
export default CustomSlider

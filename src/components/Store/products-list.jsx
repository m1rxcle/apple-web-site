import { NavLink } from "react-router-dom"
import { productsItems } from "../../constants"
const ProductsList = () => {
	return (
		<div className="overflow-hidden mask">
			<div className="flex gap-10 ">
				<div className="flex md:gap-10 sm:gap-12  animate-infinite-scroll will-change-transform">
					{[...productsItems, ...productsItems].map((item) => (
						<NavLink key={item.id} to={item.href}>
							<div className="flex flex-col items-center gap-3 group md:w-[250px] sm:w-[140px] ">
								<img
									className="opacity-100 group-hover:opacity-50 group-hover:scale-105 transition-all duration-300 ease-linear"
									src={item.img}
									alt={item.title}
								/>
								<h1 className="text-gray  group-hover:text-white transition-all duration-300 ease-linear">{item.title}</h1>
							</div>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	)
}
export default ProductsList

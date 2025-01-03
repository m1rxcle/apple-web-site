import { useState } from "react"

import { NavLink } from "react-router-dom"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen((prev) => !prev)
	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
			<nav className="flex justify-between items-center gap-10 w-full screen-max-width">
				<img
					className="cursor-pointer md:cursor-default transition-transform transform active:scale-95"
					onClick={() => handleOpen()}
					src={appleImg}
					alt="Apple"
					width={14}
					height={18}
				/>

				<div
					className={`flex flex-1 md:gap-10 gap-3 justify-center transition-all duration-500 ${
						open
							? "max-sm:max-h-[500px] max-sm:opacity-100 max-sm:transform-none"
							: "max-sm:max-h-0 max-sm:opacity-0 max-sm:transform max-sm:-translate-x-12 max-sm:pointer-events-none max-sm:scale-90"
					}`}
				>
					{/* <NavLink className="text-sm cursor-pointer text-gray hover:text-white hidden md:block" to="/">
						Store
					</NavLink> */}
					<NavLink className="text-sm cursor-pointer text-gray hover:text-white" to="/">
						Mac
					</NavLink>
					<NavLink className="text-sm cursor-pointer text-gray hover:text-white" to="/iphone">
						iPhone
					</NavLink>
					{/* <NavLink className="text-sm cursor-pointer text-gray hover:text-white hidden md:block" to="/Support">
						Support
					</NavLink> */}
				</div>
				<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
					<img src={searchImg} alt="Search" width={18} height={18} />
					<img src={bagImg} alt="bag" width={18} height={18} />
				</div>
			</nav>
		</header>
	)
}
export default Navbar

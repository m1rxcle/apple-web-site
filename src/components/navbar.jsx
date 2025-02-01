import { useState } from "react"

import { appleImg, bagImg, burgerImg, searchImg, xImg } from "../utils"
import NavItems from "./nav-items"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(!open)
	return (
		<>
			<header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center overflow-hidden">
				<nav className="flex justify-between items-center gap-10 w-full screen-max-width pr-2 ">
					<img
						className="cursor-pointer md:cursor-default transition-transform transform active:scale-95"
						src={appleImg}
						alt="Apple"
						width={14}
						height={18}
					/>

					<div className={`md:flex flex-1 md:gap-10 gap-3 justify-center hidden `}>
						<NavItems className={"flex gap-5 "} />
					</div>
					<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer ">
						<img src={searchImg} alt="Search" width={18} height={18} />
						<img src={bagImg} alt="bag" width={18} height={18} />
						<img src={`${open ? xImg : burgerImg}`} onClick={handleOpen} className="block md:hidden" alt="burger" width={18} height={18} />
					</div>
				</nav>
			</header>
			<div
				onClick={handleOpen}
				className={`${open ? "max-h-screen" : "max-h-0 hidden"} md:hidden flex absolute top-10 right-0 w-full z-20 bg-black shadow-md  shadow-white`}
			>
				<NavItems className={"flex flex-col text-2xl gap-3 p-8"} />
			</div>
		</>
	)
}
export default Navbar

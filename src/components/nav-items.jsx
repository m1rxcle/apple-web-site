import { NavLink } from "react-router-dom"
import { navLists } from "../constants"

const NavItems = ({ className }) => {
	return (
		<div className={className}>
			{navLists.map((item) => (
				<NavLink className={`cursor-pointer text-gray hover:text-white`} key={item.id} to={item.href}>
					{item.title}
				</NavLink>
			))}
		</div>
	)
}
export default NavItems

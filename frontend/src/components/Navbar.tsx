import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div className="w-full h-20 flex items-center justify-between px-20">
			<Link to="/" className="text-3xl font-bold">
				Dresser
			</Link>
			<div className="flex items-center font-bold gap-3">
				<Link to="/">
					Home
				</Link>
				<Link to="/about">
					About
				</Link>
				<Link to="/contact">
					Contact
				</Link>
			</div>
		</div>
	)
}

export default Navbar

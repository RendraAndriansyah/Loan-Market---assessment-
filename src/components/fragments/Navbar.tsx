import { GiHamburgerMenu } from "react-icons/gi";
import { CgLogOff } from "react-icons/cg";
import Button from "../elements/Button";
const Navbar = ({ onClick }: { onClick: () => void }) => {
	return (
		<nav className="flex items-center justify-between w-full white h-12 px-3">
			<Button onClick={onClick} className="bg-blue-950 px-2 py-1 rounded-sm text-slate-300">
				<GiHamburgerMenu size={22} />
			</Button>

			<div id="auth-user" className="flex gap-2 items-center cursor-pointer" onClick={onClick}>
				<CgLogOff size={28} />
				<p className="text-lg font-medium">Log out</p>
			</div>
		</nav>
	);
};

export default Navbar;

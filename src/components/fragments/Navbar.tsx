import { GiHamburgerMenu } from "react-icons/gi";
import { CgLogOff } from "react-icons/cg";
import Button from "../elements/Button";
const Navbar = ({ onClick }: { onClick: () => void }) => {
	return (
		<nav className="flex sticky top-0 bg-white items-center justify-between w-full white h-12 px-3">
			<div className="flex gap-2 ">
				<Button onClick={onClick} size="px-2 py-1 hidden lg:inline">
					<GiHamburgerMenu size={22} />
				</Button>
				<p className="text-sm lg:text-lg font-semibold text-primary-100">
					Loan Market /<span className="font-normal"> Dashboard</span>
				</p>
			</div>

			<div id="auth-user" className="flex gap-2 items-center cursor-pointer">
				<div className="hidden sm:inline-block">
					<CgLogOff size={28} />
				</div>
				<p className="hidden sm:inline-block text-sm lg:text-lg font-medium text-color-secondary">Log out</p>
				<Button onClick={onClick} size="px-2 py-1 inline sm:hidden">
					<GiHamburgerMenu size={22} />
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;

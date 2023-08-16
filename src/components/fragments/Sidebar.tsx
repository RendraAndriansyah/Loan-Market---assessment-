import { GoChevronDown, GoHome, GoPencil } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../elements/Button";
const Sidebar = ({ Collapse }: { Collapse: boolean }) => {
	return (
		<aside className={`${Collapse ? "w-16" : "w-72"}  bg-cyan-950 transition-all  h-screen sticky top-0 text-white`}>
			<BrandAvatar Collapse={Collapse} username="Yoseph Duna" statusUser="author" />
			<menu className="pt-5">
				<ul>
					<ListMenu Collapse={Collapse} icon={<GoHome size={22} />} title="Dashboard" />
					<ListMenu Collapse={Collapse} icon={<AiOutlineUser size={22} />} title="User Management" />
					<ListMenu Collapse={Collapse} icon={<GoPencil size={22} />} title="News">
						<Button>
							<GoChevronDown size={22} />
						</Button>
					</ListMenu>
				</ul>
			</menu>

			<div id="notes" className="pt-20" hidden={Collapse}>
				<Notes />
				<Notes />
			</div>
		</aside>
	);
};

type BrandAvatarProps = {
	username: string;
	statusUser: string;
	Collapse: boolean;
};

const BrandAvatar = ({ username, statusUser, Collapse }: BrandAvatarProps) => {
	return (
		<div id="top" className="px-6 py-8">
			<div id="logo" className="flex  w-20 h-20 bg-blue-400 justify-center items-end p-2">
				<h1 className="font-semibold text-base">Loan Market</h1>
			</div>
			<div hidden={Collapse}>
				<p className="font-medium pt-2">{username}</p>
				<p className="text-slate-400 font-medium">{statusUser}</p>
			</div>
		</div>
	);
};

type ListMenuProps = {
	title: string;
	icon: JSX.Element;
	children?: JSX.Element;
	Collapse: boolean;
};

const ListMenu = ({ title, icon, children, Collapse }: ListMenuProps) => {
	return (
		<li className="flex items-center h-10 bg-sky-950 border-l-emerald-50 border-l-2 px-5 py-2 ">
			<i className="pr-3">{icon}</i>
			<nav className={`w-full flex justify-between ${Collapse && "hidden"}`}>
				<p>{title}</p>
				<p>{children}</p>
			</nav>
		</li>
	);
};

const Notes = () => {
	return (
		<div className="bg-yellow-100 text-slate-700 p-3 mx-5 my-4">
			<h1 className="font-semibold text-slate-700">Notes :</h1>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ratione? Lorem, ipsum Lorem ipsum dolor
		</div>
	);
};

export default Sidebar;

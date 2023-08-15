import { GoChevronDown, GoHome, GoPencil } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
	return (
		<aside className="bg-cyan-950 w-72 h-screen sticky top-0 text-white ">
			<BrandAvatar username="Yoseph Duna" statusUser="author" />
			<menu className="pt-5">
				<ul>
					<ListMenu icon={<GoHome size={22} />} title="Dashboard" />
					<ListMenu icon={<AiOutlineUser size={22} />} title="User Management" />
					<ListMenu icon={<GoPencil size={22} />} title="News">
						<button>
							<i>
								<GoChevronDown size={22} />
							</i>{" "}
						</button>
					</ListMenu>
				</ul>
			</menu>

			<div id="notes" className="pt-20">
				<Notes />
				<Notes />
			</div>
		</aside>
	);
};

type BrandAvatarProps = {
	username: string;
	statusUser: string;
};

const BrandAvatar = ({ username, statusUser }: BrandAvatarProps) => {
	return (
		<div id="top" className="px-6 py-8">
			<div id="logo" className="flex w-20 h-20 bg-blue-400 justify-center items-end p-2">
				<h1 className="font-semibold text-base">Loan Market</h1>
			</div>
			<p className="font-medium pt-2">{username}</p>
			<p className="text-slate-400 font-medium">{statusUser}</p>
		</div>
	);
};

type ListMenuProps = {
	title: string;
	icon: JSX.Element;
	children?: JSX.Element;
};

const ListMenu = ({ title, icon, children }: ListMenuProps) => {
	return (
		<li className="flex items-center bg-sky-950 border-l-emerald-50 border-l-2 px-5 py-2 ">
			<i className="pr-3">{icon}</i>
			<div className="w-full flex justify-between">
				<p>{title}</p>
				<p>{children}</p>
			</div>
		</li>
	);
};

const Notes = () => {
	return (
		<div className="bg-yellow-100 text-slate-700 p-3 mx-5 my-4">
			<h1 className="font-semibold text-slate-700">Notes :</h1>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ratione?
		</div>
	);
};

export default Sidebar;

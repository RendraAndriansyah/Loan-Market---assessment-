import { GoChevronDown, GoHome, GoPencil } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../elements/Button";
import { useState } from "react";
const Sidebar = ({ Collapse }: { Collapse: boolean }) => {
	const [show, setShow] = useState<boolean>(true);

	return (
		<aside
			className={`${
				Collapse ? "w-16" : "w-72"
			}  bg-color-secondary transition-all  h-screen sticky top-0 text-white z-10`}
		>
			<BrandAvatar Collapse={Collapse} username="Yoseph Duna" statusUser="author" />
			<menu className="pt-5">
				<ul>
					<ListMenu Collapse={Collapse} icon={<GoHome size={22} />} title="Dashboard" />
					<ListMenu Collapse={Collapse} icon={<AiOutlineUser size={22} />} title="User Management" />
					<ListMenu Collapse={Collapse} icon={<GoPencil size={22} />} title="News" onHover={() => setShow(!show)}>
						{!Collapse && (
							<Button>
								<GoChevronDown size={22} />
							</Button>
						)}
						{Collapse && (
							<div className="absolute left-16 text-left bg-sky-950 w-28 px-2 py-1.5" hidden={show}>
								Add News
							</div>
						)}
					</ListMenu>
				</ul>
			</menu>

			<div id="notes" className="pt-8" hidden={Collapse}>
				<Notes
					text={`Table data & analytic sementara pakai yang lama saja https://www.loanmarket.co.id/ admin/#/dashboard.*ha usnya be isi ada berapapostingan`}
				/>
				<Notes text={`Button "Go to CRM" hanyauntuk Superadmin`} />
			</div>
		</aside>
	);
};

export default Sidebar;

type BrandAvatarProps = {
	username: string;
	statusUser: string;
	Collapse: boolean;
};

const BrandAvatar = ({ username, statusUser, Collapse }: BrandAvatarProps) => {
	return (
		<div id="top" className={`${Collapse ? "px-2 " : "px-6"} h-44 py-6`}>
			<div
				id="logo"
				className={`${Collapse ? "w-12 h-12" : "w-20 h-20"} flex bg-blue-400 justify-center items-end p-1`}
			>
				<h1 className={`${Collapse ? "font-semibold text-xs" : "font-bold text-base"}`}>Loan Market</h1>
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
	children?: any;
	Collapse: boolean;
	onHover?: () => void;
};

const ListMenu = ({ title, icon, children, Collapse, onHover }: ListMenuProps) => {
	return (
		<li
			className="flex items-center h-10 bg-active border-l-emerald-50 border-l-2 px-5 py-2 cursor-pointer  transition-all "
			onMouseEnter={onHover}
			onMouseLeave={onHover}
		>
			<i className="pr-3">{icon}</i>
			<div className={`w-full flex justify-between ${Collapse && "hidden"}`}>
				<p>{title}</p>
			</div>
			{children}
		</li>
	);
};

const Notes = ({ text }: { text: string }) => {
	return (
		<div className="bg-yellow-100 text-slate-700 p-3 mx-5 my-4">
			<h1 className="font-semibold text-slate-700">Notes :</h1>
			<p className="text-sm">{text}</p>
		</div>
	);
};

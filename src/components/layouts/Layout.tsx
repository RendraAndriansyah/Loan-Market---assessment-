import Sidebar from "../fragments/Sidebar";

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<div className="flex relative">
			<Sidebar />
			<div id="content" className="relative w-full">
				<nav className="w-full bg-teal-500 h-12">navbar</nav>
				{children}
				<footer className="absolute bottom-0 bg-red-400 w-full h-10">footer</footer>
			</div>
		</div>
	);
};

export default Layout;

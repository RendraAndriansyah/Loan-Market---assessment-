import { useState } from "react";
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/Sidebar";

const Layout = ({ children }: { children: JSX.Element }) => {
	const [Collapse, setCollapse] = useState<boolean>(false);
	return (
		<div className="flex relative bg-color-primary">
			<Sidebar Collapse={Collapse} />
			<div id="content" className="relative w-full">
				<Navbar onClick={() => setCollapse(!Collapse)} />
				<main className="p-8">{children}</main>
				<footer className="absolute bottom-0 bg-red-400 w-full h-10">footer</footer>
			</div>
		</div>
	);
};

export default Layout;

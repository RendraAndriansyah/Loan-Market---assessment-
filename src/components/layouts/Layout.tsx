import { useState } from "react";
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/Sidebar";
import Footer from "../fragments/Footer";

const Layout = ({ children }: { children: JSX.Element[] }) => {
	const [Collapse, setCollapse] = useState<boolean>(false);
	return (
		<div className="flex relative bg-color-primary">
			<Sidebar Collapse={Collapse} />
			<div id="content" className="relative w-full">
				<Navbar onClick={() => setCollapse(!Collapse)} />
				<main className="px-6 pb-12">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

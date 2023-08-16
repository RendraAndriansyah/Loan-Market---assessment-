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
				<footer className="flex items-center absolute bottom-0 bg-white w-full h-12">
					<p className="pl-10">Copyright Loan Market © 2021</p>
				</footer>
			</div>
		</div>
	);
};

export default Layout;

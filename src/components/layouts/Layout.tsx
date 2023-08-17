import { useEffect, useState } from "react";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/Sidebar";

const Layout = ({ children }: { children: JSX.Element[] }) => {
	const [collapse, setCollapse] = useState<boolean>(false);
	const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

	useEffect(() => {
		const checkWidth = () => {
			setWidthScreen(window.innerWidth);
		};
		window.addEventListener("resize", checkWidth);
		if (widthScreen < 1024) setCollapse(true);
		if (widthScreen > 1024) setCollapse(false);
		return () => {
			window.removeEventListener("resize", checkWidth);
		};
	}, [widthScreen]);

	return (
		<div className="flex relative bg-color-primary">
			<Sidebar Collapse={collapse} />
			<div id="content" className="relative w-full">
				<Navbar onClick={() => setCollapse(!collapse)} />
				<main className="px-6 pb-12">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

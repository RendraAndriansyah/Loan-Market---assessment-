const Section = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
	return <section className="py-6">{children}</section>;
};

type HeaderProps = {
	children?: JSX.Element;
	desc: string;
	title: string;
};

const Header = ({ children, title, desc }: HeaderProps) => {
	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-2xl font-semibold text-primary-100">{title}</h1>
				<p className="text-slate-400">{desc}</p>
			</div>
			{children}
		</div>
	);
};

Section.Header = Header;

export default Section;

type ButtonProps = {
	children: JSX.Element;
	onClick?: () => void;
	className?: string;
};

const Button = (props: ButtonProps) => {
	const { children, onClick, className = "border-1 px-2 py-1 text-slate-200 rounded-sm" } = props;
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default Button;

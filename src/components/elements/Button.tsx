type ButtonProps = {
	children: JSX.Element | string;
	onClick?: () => void;
	size?: string;
};

const Button = (props: ButtonProps) => {
	const { children, onClick, size } = props;
	return (
		<button onClick={onClick} className={`bg-color-secondary text-slate-300 rounded-md font-semibold ${size}`}>
			{children}
		</button>
	);
};

export default Button;

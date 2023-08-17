type CardRowProps = {
	icon: JSX.Element;
	title: string;
	value: number;
};

const CardRow = ({ icon, title, value }: CardRowProps) => {
	return (
		<div className="flex px-2 bg-white rounded-xl justify-between items-center">
			<div className="bg-zinc-700/90 text-white p-2 rounded-xl">{icon}</div>
			<div className="text-slate-700">
				<h1 className="text-xs 2xl:text-sm ">{title}</h1>
				<h1 className="text-right font-bold text-xl">{value}</h1>
			</div>
		</div>
	);
};

export default CardRow;

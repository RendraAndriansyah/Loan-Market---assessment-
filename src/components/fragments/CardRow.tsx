type CardRowProps = {
	icon: JSX.Element;
	title: string;
	value: number;
};

const CardRow = ({ icon, title, value }: CardRowProps) => {
	return (
		<div className="flex flex-col sm:flex-row  w-[18vw] sm:h-[6vh] 2xl:h-[8vh] 2xl:w-[12vw] p-1 pt-4 justify-between  bg-white rounded-xl gap-4 items-center">
			<div className="bg-zinc-700/90 text-white p-2 rounded-xl">{icon}</div>
			<div className="text-slate-700 ">
				<h1 className="text-center sm:text-right text-xs font-medium 2xl:text-sm ">{title}</h1>
				<h1 className="text-center sm:text-right font-bold text-xl">{value}</h1>
			</div>
		</div>
	);
};

export default CardRow;

type CardColumn = {
	icon: JSX.Element;
	value: number;
	title: string;
};
const CardColumn = ({ icon, value, title }: CardColumn) => {
	return (
		<div
			id="card-column"
			className="w-[20vw] h-[20vh] lg:w-[10vw]   2xl:h-[30vh] flex flex-col justify-center items-center gap-y-4 lg:gap-y-8 bg-white m-1  rounded-xl py-2 "
		>
			<div className="w-12 h-12 sm:w-20 sm:h-20  bg-color-secondary text-slate-200 rounded-xl flex items-center justify-center">
				{icon}
			</div>
			<div className="text-center">
				<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{value}</h1>
				<h4 className="text-xs lg:text-base">{title}</h4>
			</div>
		</div>
	);
};

export default CardColumn;

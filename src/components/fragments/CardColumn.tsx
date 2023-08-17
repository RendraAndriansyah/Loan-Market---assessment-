type CardColumn = {
	icon: JSX.Element;
	value: number;
	title: string;
};
const CardColumn = ({ icon, value, title }: CardColumn) => {
	return (
		<div
			id="card-column"
			className="w-[20vw] h-[20vh] lg:w-[10vw]  xl:h-[25vh] 2xl:h-[30vh] flex flex-col justify-center items-center gap-y-8 bg-white m-1  rounded-xl py-2 "
		>
			<div className="w-[50%] h-[50%] xl:w-20 xl:h-20  bg-color-secondary text-slate-200 rounded-xl flex items-center justify-center">
				{icon}
			</div>
			<div className="text-center">
				<h1 className="text-xl xl:text-3xl font-bold">{value}</h1>
				<h4 className="text-xs lg:text-base">{title}</h4>
			</div>
		</div>
	);
};

export default CardColumn;

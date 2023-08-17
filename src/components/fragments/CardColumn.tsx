type CardColumn = {
	icon: JSX.Element;
	value: number;
	title: string;
};
const CardColumn = ({ icon, value, title }: CardColumn) => {
	return (
		<div
			id="card-column"
			className="w-[15vw] 2xl:w-[10vw] h-[20vh] xl:h-[25vh] 2xl:h-[30vh] flex flex-col justify-center items-center gap-y-12 bg-white m-1  rounded-xl "
		>
			<div className="w-20 h-20 bg-color-secondary text-slate-200 rounded-2xl flex items-center justify-center">
				{icon}
			</div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">{value}</h1>
				<h4>{title}</h4>
			</div>
		</div>
	);
};

export default CardColumn;

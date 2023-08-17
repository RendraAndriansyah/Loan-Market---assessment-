import { CategoryScale, Chart as ChartJS, Filler, LineElement, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import { optionsLine } from "../../../dummy-data/DummyOption";
ChartJS.register(LineElement, CategoryScale, LinearScale, Filler, PointElement);

const LineChart = ({ data }: { data: any }) => {
	const color = data.datasets[0]?.borderColor;
	return (
		<div className={`flex  h-[5vh] my-2 items-center rounded-md border-l-4 gap-2 px-2`} style={{ borderColor: color }}>
			<div className="p-2 w-[60%] ">
				<p className="text-xs text-slate-400">{data.title}</p>
				<p className="text-xl font-medium">{Intl.NumberFormat("en-US").format(data.value)}</p>
			</div>
			<div className="w-[60%] ">
				<Line data={data} options={optionsLine} width={"150%"} height={"40%"} />
			</div>
		</div>
	);
};

export default LineChart;

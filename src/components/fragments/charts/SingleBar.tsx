import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { optionSingleBar } from "../../../dummy-data/DummyOption";
ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

interface DataProps {
	labels: string[];
	datasets: Dataset[];
}
interface Dataset {
	label: string;
	data: DataPoint[];
	backgroundColor: string;
	borderRadius?: number | { topLeft: number; bottomLeft: number };
	borderSkipped?: boolean;
}
interface DataPoint {
	x: number;
	y: string;
}

const SingleBarChart = ({ data, icon }: { data: DataProps; icon: JSX.Element }) => {
	return (
		<div className="w-[99%] 2xl:w-[90%] ">
			<div className="flex justify-between">
				<div className="flex items-center gap-1 text-color-secondary">
					{icon}
					<p>{data.datasets[0].label}</p>
				</div>
				<p className="font-semibold text-color-secondary">{data.datasets[0].data[0].x}%</p>
			</div>
			<Bar data={data} options={optionSingleBar} height={3} width={100} />
		</div>
	);
};

export default SingleBarChart;

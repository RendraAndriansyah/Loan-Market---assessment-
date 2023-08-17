import { BiUserCircle } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerServiceLine } from "react-icons/ri";
import Button from "../components/elements/Button";
import CardColumn from "../components/fragments/CardColumn";
import CardRow from "../components/fragments/CardRow";
import LineChart from "../components/fragments/charts/LineChart";
import SingleBarChart from "../components/fragments/charts/SingleBar";
import Layout from "../components/layouts/Layout";
import {
	costumerFemale,
	costumerMale,
	costumers,
	processed,
	processedSingleBar,
	unprocessed,
	unprocessedSingleBar,
} from "../dummy-data/DummyData";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { SlUserFemale, SlUser } from "react-icons/sl";
function HomePages() {
	const dummyCardRow = [
		{
			icon: <BiUserCircle size={30} />,
			title: "Admin Office",
			value: 4,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Principle",
			value: 12,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Author",
			value: 6,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Super Admin",
			value: 3,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Principle LMI",
			value: 11,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "BDE",
			value: 7,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Bank Officer",
			value: 124,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Bank Admin",
			value: 210,
		},
		{
			icon: <BiUserCircle size={30} />,
			title: "Bank Principal",
			value: 36,
		},
	];

	return (
		<Layout>
			<>
				{/* Section 1 */}
				<section>
					{/* Header */}
					<div className="flex justify-between">
						<div>
							<h1 className="text-2xl font-semibold text-primary-100">Dashboard</h1>
							<p className="text-slate-400">User Quantity</p>
						</div>
						<Button size="w-36 h-12">Go to CRM ➜ </Button>
					</div>

					{/* Cards */}
					<div className="grid 2xl:grid-cols-2 mt-6 gap-12 ">
						<div className="grid grid-cols-3 gap-x-16 bg-red-200 justify-items-center">
							<CardColumn icon={<BiUserCircle size={60} />} value={9823} title="Users" />
							<CardColumn icon={<GiReceiveMoney size={60} />} value={243} title="Borrower" />
							<CardColumn icon={<RiCustomerServiceLine size={60} />} value={56} title="Loan Adviser" />
						</div>
						<div className="grid grid-cols-3 gap-4">
							{dummyCardRow.map((item, index) => (
								<CardRow key={index} icon={item.icon} title={item.title} value={item.value} />
							))}
						</div>
					</div>
				</section>

				{/* Section 2 */}
				<section className="mt-2">
					{/* Header */}
					<div className="flex justify-between">
						<div>
							<h1 className="text-2xl font-semibold text-primary-100">Data & Analytics</h1>
							<p className="text-slate-400">Show Update of Post</p>
						</div>
					</div>

					{/* Cards */}
					<div className="grid grid-cols-2 mt-6 bg-white min-h-[25vh] rounded-xl p-4 gap-3 ">
						<div className="grid gap-4 ">
							<div className="grid grid-cols-2 gap-2 border-b-2 border-gray-400/20 shadow-sm">
								<LineChart data={unprocessed} />
								<LineChart data={processed} />
								{/* <LineChart /> */}
							</div>
							<div className="row-span-6 ">
								<div className="flex flex-col items-center gap-2 ">
									<SingleBarChart icon={<AiOutlineCheckCircle size={30} />} data={unprocessedSingleBar} />
									<SingleBarChart icon={<AiOutlineCloseCircle size={30} />} data={processedSingleBar} />
								</div>
							</div>
						</div>

						<div className="grid gap-4 ">
							<div className="grid grid-cols-2 gap-2 border-b-2 border-gray-400/20 shadow-sm">
								<LineChart data={costumers} />
							</div>
							<div className="row-span-6 ">
								<div className="flex flex-col items-center gap-2">
									<SingleBarChart icon={<SlUser size={25} />} data={costumerMale} />
									<SingleBarChart icon={<SlUserFemale size={25} />} data={costumerFemale} />
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		</Layout>
	);
}

export default HomePages;

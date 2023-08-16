import { BiUserCircle } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import Button from "../components/elements/Button";
import CardColumn from "../components/fragments/CardColumn";
import Layout from "../components/layouts/Layout";
import { RiCustomerServiceLine } from "react-icons/ri";
import CardRow from "../components/fragments/CardRow";
function HomePages() {
	const dummyCardRow = [
		{
			icon: <BiUserCircle size={40} />,
			title: "Admin Office",
			value: 4,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Principle",
			value: 12,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Author",
			value: 6,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Super Admin",
			value: 3,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Principle LMI",
			value: 11,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "BDE",
			value: 7,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Bank Officer",
			value: 124,
		},
		{
			icon: <BiUserCircle size={40} />,
			title: "Bank Admin",
			value: 210,
		},
		{
			icon: <BiUserCircle size={40} />,
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
					<div className="grid grid-cols-2 mt-12 gap-x-24 ">
						<div className="grid grid-cols-3 gap-12">
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
				<section>
					{/* Header */}
					<div className="flex justify-between">
						<div>
							<h1 className="text-2xl font-semibold text-primary-100">Data & Analytics</h1>
							<p className="text-slate-400">Show Update of Post</p>
						</div>
					</div>

					{/* Cards */}
					<div className="grid grid-cols-2 mt-12 gap-x-24 ">
						<div className="grid grid-cols-3 gap-12">
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
			</>
		</Layout>
	);
}

export default HomePages;

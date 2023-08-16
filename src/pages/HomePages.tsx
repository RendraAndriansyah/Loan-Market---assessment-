import { BiUserCircle } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import Button from "../components/elements/Button";
import CardColumn from "../components/fragments/CardColumn";
import Layout from "../components/layouts/Layout";
import { RiCustomerServiceLine } from "react-icons/ri";
function HomePages() {
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
					<div className="grid grid-cols-2 mt-12 gap-x-24 border">
						<div className="grid grid-cols-3 gap-12">
							<CardColumn icon={<BiUserCircle size={60} />} value={9823} title="Users" />
							<CardColumn icon={<GiReceiveMoney size={60} />} value={243} title="Borrower" />
							<CardColumn icon={<RiCustomerServiceLine size={60} />} value={56} title="Loan Adviser" />
						</div>
						<div className="grid grid-cols-3 gap4">
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
							<div>test</div>
						</div>
					</div>
				</section>
			</>
		</Layout>
	);
}

export default HomePages;

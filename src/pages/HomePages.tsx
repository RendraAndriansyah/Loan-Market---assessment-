import Button from "../components/elements/Button";
import Layout from "../components/layouts/Layout";

function HomePages() {
	return (
		<Layout>
			<>
				{/* Header */}
				<div className="flex justify-between">
					<div>
						<h1 className="text-2xl font-semibold text-primary-100">Dashboard</h1>
						<p className="text-slate-400">User Quantity</p>
					</div>
					<Button size="w-36 h-12">Go to CRM ➜ </Button>
				</div>

				{/* Section 1 */}
				<section>
					<div></div>
				</section>
			</>
		</Layout>
	);
}

export default HomePages;

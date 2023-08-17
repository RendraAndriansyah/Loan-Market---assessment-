export const optionsLine = {
	plugins: {
		legend: { display: false },
	},
	scales: {
		x: {
			display: false,
			grid: {
				display: false,
			},
		},
		y: {
			display: false,

			ticks: {
				stepSize: 0,
			},
			grid: {
				borderDash: "transparent",
				display: false,
			},
		},
	},
	maintanceAspectRatio: false,
};

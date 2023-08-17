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

export const optionSingleBar = {
	plugins: {
		legend: {
			display: false,
		},
	},
	indexAxis: "y" as const,
	barThickness: 5,

	scales: {
		x: {
			display: false,
			stacked: true,
			grid: {
				display: false,
			},
			max: 100,
		},
		y: {
			stacked: true,
			display: false,
			grid: {
				display: false,
			},
		},
	},
};

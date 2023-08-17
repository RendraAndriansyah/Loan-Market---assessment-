export const unprocessed = {
	labels: ["a", "b", "c", "d", "e", "f", "g"],
	datasets: [
		{
			data: [1, 0.8, 1.1, 0.8, 1.5, 0.8, 1.2],
			backgroundColor: "transparent",
			borderColor: "#20A8D8",
			// pointBorderColor: "transparent",
			pointRadius: 0,
			borderWidth: 2,
			fill: true,
			tension: 0.4,
		},
	],
	title: "Belum Diproses",
	value: 9123,
};

export const processed = {
	labels: ["a", "b", "c", "d", "e", "f", "g"],
	datasets: [
		{
			data: [1, 0.9, 1.2, 0.9, 0.95, 0.8, 0.6],
			backgroundColor: "transparent",
			borderColor: "#EE706F",
			// pointBorderColor: "transparent",
			pointRadius: 0,
			borderWidth: 2,
			fill: true,
			tension: 0.4,
		},
	],
	title: "Sudah Diproses",
	value: 22643,
};

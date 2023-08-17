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

export const costumers = {
	labels: ["a", "b", "c", "d", "e", "f", "g"],
	datasets: [
		{
			data: [1, 0.8, 1.1, 0.8, 1.5, 0.8, 1.2],
			backgroundColor: "transparent",
			borderColor: "#F9C014",
			// pointBorderColor: "transparent",
			pointRadius: 0,
			borderWidth: 2,
			fill: true,
			tension: 0.4,
		},
	],
	title: "Customer",
	value: 78623,
};

export const unprocessedSingleBar = {
	labels: ["unprocessed"],

	datasets: [
		{
			label: "Belum diproses",
			data: [
				{
					x: 43,
					y: "unprocessed",
				},
			],
			backgroundColor: "#20A8D8",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "empty",
			data: [
				{
					x: 100 - 43,
					y: "unprocessed",
				},
			],
			backgroundColor: "#EFF3F6",
			borderRadius: 10,
		},
	],
};

export const processedSingleBar = {
	labels: ["processed"],

	datasets: [
		{
			label: "Sudah diproses",
			data: [
				{
					x: 57,
					y: "processed",
				},
			],
			backgroundColor: "#EE706F",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "empty",
			data: [
				{
					x: 100 - 57,
					y: "processed",
				},
			],
			backgroundColor: "#EFF3F6",
			borderRadius: 10,
		},
	],
};

export const costumerMale = {
	labels: ["costumer"],

	datasets: [
		{
			label: "Pria",
			data: [
				{
					x: 43,
					y: "processed",
				},
			],
			backgroundColor: "#F9C014",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "empty",
			data: [
				{
					x: 100 - 43,
					y: "processed",
				},
			],
			backgroundColor: "#EFF3F6",
			borderRadius: 10,
		},
	],
};

export const costumerFemale = {
	labels: ["costumer"],

	datasets: [
		{
			label: "Wanita",
			data: [
				{
					x: 37,
					y: "processed",
				},
			],
			backgroundColor: "#F9C014",
			borderRadius: {
				topLeft: 50,
				bottomLeft: 50,
			},
			borderSkipped: false,
		},
		{
			label: "empty",
			data: [
				{
					x: 100 - 37,
					y: "processed",
				},
			],
			backgroundColor: "#EFF3F6",
			borderRadius: 10,
		},
	],
};

type HouseData = {
	name: string;
};

type House = {
	id: number;
	path: string;
	data?: HouseData;
};

export { type House };

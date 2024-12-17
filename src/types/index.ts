type HouseData = {
	reference: string;
	surfaceArea: number;
	overlook: boolean;
	isFurnished: boolean;
	price: number; // per m2
	housingTax: number;
	applicationFees: number;
};

type House = {
	id: number;
	path: string;
	data?: HouseData;
};

export { type House };

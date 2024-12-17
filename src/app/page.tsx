'use client';

import * as React from 'react';
import { type House } from '@/types';
import { LotSvg } from '@/components/business/lot-svg';
import { HouseSheet } from '@/components/business/house-sheet';
import { formSchema, HouseForm } from '@/components/business/house-form';
import { HouseSvgList } from '@/components/business/house-svg-list';
import { z } from 'zod';

const INITIAL_HOUSES = [
	{
		id: 12,
		path: 'M300.5 342V462.5L366 463.5V341.5L300.5 342Z',
	},
	{
		id: 27,
		path: 'M944.5 879L972.5 1054L1098 1015L994 870.5L944.5 879Z',
	},
	{
		id: 26,
		path: 'M877.5 889L905 1061.5L907 1073.5L972.5 1054L944.5 879L877.5 889Z',
	},
	{
		id: 25,
		path: 'M833.5 895.5L756 929.5L815 970.5L864.5 1022.5L895 1077.5L907 1073.5L877.5 889L833.5 895.5Z',
	},
	{
		id: 24,
		path: 'M833.5 895.5L756 929.5L696.5 890.5L831.5 783L866 835.5L821.5 868.5L833.5 895.5Z',
	},
	{
		id: 23,
		path: 'M744.5 735L672 874L696.5 890.5L831.5 783L813.5 755L804 754L794.5 753L785.5 751L777 748.5L759.5 741.5L744.5 735Z',
	},
	{
		id: 22,
		path: 'M688 702.5L613 846L670 877.5L744.5 735L688 702.5Z',
	},
	{
		id: 21,
		path: 'M559.5 230L561 320.5H612.5V230H559.5Z',
	},
	{
		id: 20,
		path: 'M636 666L564.5 819L577.5 827L613 846L688 702.5L649 675.5L636 666Z',
	},
	{
		id: 19,
		path: 'M578 654.5L521.5 785L564.5 819L636 666L609 651L593.5 645.5L583 642.5L578 654.5Z',
	},
	{
		id: 18,
		path: 'M519.5 643.5L477.5 747.5L482 753L487.5 758.5L492.5 763L502 771L521.5 785L583 642.5L566 637.5L545.5 636L523 635L519.5 643.5Z',
	},
	{
		id: 17,
		path: 'M437 698L441 708L451 720.5L477.5 747.5L523 635L512 633L502 631L491.5 627.5L480 622.5L462 611L439.5 644L436 668L437 698Z',
	},
	{
		id: 16,
		path: 'M547.5 476.5L546.5 609L560.5 610.5L575.5 612.5L586 614.5L594.5 617L609.5 622L626.5 585.5V512L590.5 476.5H547.5Z',
	},
	{
		id: 15,
		path: 'M468.5 476.5L467.5 582L483.5 594L496 600.5L511 606L524 609H546.5L547.5 476.5H468.5Z',
	},
	{
		id: 14,
		path: 'M441.5 609.5L411 656L320.5 596.5L374 502L442 502.5L441.5 609.5Z',
	},
	{
		id: 13,
		path: 'M183 473.5L169.5 494L244 547L282 572.5L320.5 596.5L374 502L442 502.5V476.5L183 473.5Z',
	},
	{
		id: 11,
		path: 'M174 460.5L165 451.5L269 314L300.5 342V462.5L174 460.5Z',
	},
	{
		id: 6,
		path: 'M366 341.5V463.5H442.5L443.5 341.5H366Z',
	},
	{
		id: 5,
		path: 'M310.5 314L285.5 293L391 161.5L433 194L409.5 230.5L408.5 315.5L310.5 314Z',
	},
	{
		id: 4,
		path: 'M408 231.531L408.5 315.5H484.5V220.5H456.5V194H432.477L408 231.531Z',
	},
	{
		id: 3,
		path: 'M491 72L490 181L456.5 180.5V194H433.5L431.5 192.5L391 161.5L474.5 61L491 72Z',
	},
	{
		id: 2,
		path: 'M491 72L490 181H582.5V138.5L563.5 120.5L543 104.5L517.5 87.5L491 72Z',
	},
	{
		id: 1,
		path: 'M506.5 230L505.5 320.5H561L559.5 230H506.5Z',
	},
] satisfies House[];

const Page = () => {
	const [houses, setHouses] = React.useState<House[]>(INITIAL_HOUSES);
	const [selectedHouseId, setSelectedHouseId] = React.useState<number | null>(
		null,
	);

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (!selectedHouseId) return;
		console.log(values);
	}

	return (
		<main>
			<h1>Azizi Immobilier POC</h1>

			<LotSvg>
				<HouseSvgList
					houses={houses}
					selectedHouseId={selectedHouseId}
					onSelectHouse={(id) => setSelectedHouseId(id)}
				/>
			</LotSvg>

			<HouseSheet
				open={!!selectedHouseId}
				onOpenChange={(open) => {
					if (!open) setSelectedHouseId(null);
				}}
			>
				<HouseForm
					onSubmit={onSubmit}
					onCancel={() => setSelectedHouseId(null)}
				/>
			</HouseSheet>
		</main>
	);
};

export default Page;

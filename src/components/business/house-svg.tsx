import * as React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { type House } from '@/types';
import { cn } from '@/lib/utils';

type HouseSvgProps = {
	house: House;
	selectedHouseId: number | null;
	onSelectHouse: (id: number) => void;
};

const HouseSvg = ({ house, selectedHouseId, onSelectHouse }: HouseSvgProps) => {
	return (
		<TooltipProvider delayDuration={200}>
			<Tooltip>
				<TooltipTrigger asChild>
					<path
						id={house.id.toString()}
						d={house.path}
						className={cn(
							'cursor-pointer stroke-[3px] stroke-black fill-white hover:fill-red-200',
							{ 'stroke-red-800 fill-red-200': house.id === selectedHouseId },
						)}
						onClick={() => onSelectHouse(house.id)}
					/>
				</TooltipTrigger>
				<TooltipContent className='w-96'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
						consequatur assumenda error ducimus sint laborum itaque! Perferendis
						dolorem commodi ad.
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export { HouseSvg };

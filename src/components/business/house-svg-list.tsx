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
	houses: House[];
	selectedHouseId: number | null;
	onSelectHouse: (id: number) => void;
};

const HouseSvgList = ({
	houses,
	selectedHouseId,
	onSelectHouse,
}: HouseSvgProps) => {
	return (
		<g>
			{houses.map((house, index) => (
				<TooltipProvider key={index} delayDuration={200}>
					<Tooltip>
						<TooltipTrigger asChild>
							<path
								id={house.id.toString()}
								d={house.path}
								className={cn(
									'cursor-pointer stroke-[3px] stroke-black fill-white hover:fill-red-200',
									{
										'stroke-red-800 fill-red-200': house.id === selectedHouseId,
									},
								)}
								onClick={() => onSelectHouse(house.id)}
							/>
						</TooltipTrigger>
						<TooltipContent>
							<table>
								<tbody>
									<tr>
										<th className='text-left pr-2'>Réf</th>
										<td>REF-2024-001</td>
									</tr>
									<tr>
										<th className='text-left pr-2'>Superficie</th>
										<td>
											135 m<sup>2</sup>
										</td>
									</tr>
									<tr>
										<th className='text-left pr-2'>
											Prix (par m<sup>2</sup>)
										</th>
										<td>1000.2 DH</td>
									</tr>
									<tr>
										<th className='text-left pr-2'>Vise-à-vis</th>
										<td>Oui</td>
									</tr>
									<tr>
										<th className='text-left pr-2'>Meublé</th>
										<td>Non</td>
									</tr>
								</tbody>
							</table>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			))}
			{/* to put selected path in front of other paths */}
			{selectedHouseId && <use xlinkHref={`#${selectedHouseId}`} />}
		</g>
	);
};

export { HouseSvgList };

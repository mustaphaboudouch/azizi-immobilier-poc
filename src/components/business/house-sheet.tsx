import * as React from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';

type HouseSheetProps = {
	children: React.ReactNode;
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

const HouseSheet = ({ children, open, onOpenChange }: HouseSheetProps) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className='py-14'>
				<SheetClose />
				<SheetHeader className='hidden'>
					<SheetTitle />
					<SheetDescription />
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
};

export { HouseSheet };

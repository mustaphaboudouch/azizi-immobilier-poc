import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const Page = () => {
	return (
		<div>
			<h1>Azizi Immobilier POC</h1>

			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Page;

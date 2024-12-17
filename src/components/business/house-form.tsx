'use client';

import * as React from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
	ref: z.string().min(1),
	surfaceArea: z.number().positive(),
	overlook: z.boolean(),
	isFurnished: z.boolean(),
	price: z.number().positive(),
	housingTax: z.number().nonnegative(),
	applicationFees: z.number().nonnegative(),
});

type HouseFormProps = {
	onSubmit: (values: z.infer<typeof formSchema>) => void;
	onCancel: () => void;
};

const HouseForm = ({ onSubmit, onCancel }: HouseFormProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			ref: '',
			surfaceArea: 0,
			overlook: false,
			isFurnished: false,
			price: 0,
			housingTax: 0,
			applicationFees: 0,
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
				<div className='flex flex-col space-y-3'>
					<FormField
						control={form.control}
						name='ref'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Référence</FormLabel>
								<FormControl>
									<Input placeholder='Référence' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='surfaceArea'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Superficie (en m<sup>2</sup>)
								</FormLabel>
								<FormControl>
									<Input
										type='number'
										min={0}
										placeholder='Superficie (en m2)'
										{...field}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Prix par m<sup>2</sup> (en DH)
								</FormLabel>
								<FormControl>
									<Input
										type='number'
										min={0}
										placeholder='Prix par m2 (en DH)'
										{...field}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='housingTax'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tax d'habitation (en DH)</FormLabel>
								<FormControl>
									<Input
										type='number'
										min={0}
										placeholder="Tax d'habitation (en DH)"
										{...field}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='applicationFees'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Frais de dossier (en DH)</FormLabel>
								<FormControl>
									<Input
										type='number'
										min={0}
										placeholder='Frais de dossier  (en DH)'
										{...field}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex items-center gap-10 pt-2'>
						<FormField
							control={form.control}
							name='overlook'
							render={({ field }) => (
								<FormItem>
									<div className='flex items-center gap-2'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormLabel>Vise-à-vis</FormLabel>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='isFurnished'
							render={({ field }) => (
								<FormItem>
									<div className='flex items-center gap-2'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormLabel>Meublé</FormLabel>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<Button type='submit'>Enregistrer</Button>
					<Button type='button' variant='secondary' onClick={onCancel}>
						Annuler
					</Button>
				</div>
			</form>
		</Form>
	);
};

export { HouseForm, formSchema };

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '~/styles/globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const metadata = {
	title: 'Azizi Immobilier POC',
} satisfies Metadata;

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
};

export default Layout;
export { metadata };

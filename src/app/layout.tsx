import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/provider/providers";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Crypto Watch",
	description: "Check out the latest info on a Crypto currencies market values",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} font-sans h-screen flex flex-col bg-gray-900 text-white/90 min-h-screen`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

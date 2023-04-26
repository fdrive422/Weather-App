import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="text-2xl">
			<h1>Lets build a GPT Weather App</h1>
		</main>
	);
}

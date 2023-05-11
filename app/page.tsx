"use client";

import CitySelector from "@/components/CitySelector";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
			<Card className="max-w-4xl mx-auto">
				<Text className="text-5xl font-bold text-center mb-10">
					Weather AI
				</Text>
				<Subtitle>
					<p className="text-xl text-center mb-3">
						Powered by OpenAI, Next.js 13.3, Termor 2.0 + More!
					</p>
					<p className="text-md text-center">
						Developed by: fdrive422
					</p>
				</Subtitle>

				<Divider className="my-10" />
				<Card className="bg-gradient-to-br from-[#394f68] to-[#183B7E]">
					<CitySelector />
				</Card>
			</Card>
		</div>
	);
}

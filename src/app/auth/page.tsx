import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

const Page = async () => {
	const { isAuthenticated } = getKindeServerSession();
	if (await isAuthenticated()) return redirect("/");

	return (
		<div className="flex h-screen w-full">
			<div
				className="flex-1 flex overflow-hidden dark:bg-[#ffc3c3] bg-[#5a0818] relative 
      justify-center items-center"
			>
				<img
					src="/comment-dots-solid.svg"
					alt="Dialog Logo"
					className="absolute -right-24 opacity-60 brightness-75 -top-44 lg:scale-110 xl:scale-100 scale-[2] sm:scale-90
        pointer-events-none select-none -z-1"
				/>

				<div className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-bold text-black">
					<p className="text-2xl md:text-3xl text-balance z-10">
						A super cool
						<span className="bg-red-100 px-2 m-1 rounded-sm font-bold text-black">
							Chat App
						</span>
						built
					</p>

					<p className="text-2xl md:text-3xl mt-2 mb-12 text-balance z-10">
						to be
						<span className="bg-red-100 font-bold px-2  m-1 rounded-sm text-black">
							FAST
						</span>
						. Try now!
					</p>
					<div className="mb-3 flex justify-center">
						<p className="text-sm text-center">
							This application is{" "}
							<strong className="text-sm">powered by Kinde</strong>.{" "}
							<a
								href="https://kinde.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm underline"
							>
								Learn more
							</a>
							.
						</p>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<span className="text-gray-500 hover:text-gray-700 cursor-pointer">
										<Info size={16} />
									</span>
								</TooltipTrigger>
								<TooltipContent className="tooltip-content">
									<div className="relative flex justify-center items-center mt-4 mb-3 px-4">
										<p className="text-sm text-center text-gray-800 max-w-xs sm:max-w-md bg-white p-4 rounded shadow-md">
											Kinde prioritizes data security and privacy with
											industry-standard practices. As a developer, I do not have
											direct access to users' personal data managed by Kinde.
											All sensitive data is handled securely by Kinde in
											compliance with their privacy policies. For more details,
											please refer to{" "}
											<a
												href="https://docs.kinde.com/trust-center/privacy-and-compliance/privacy-policy/"
												className="underline text-blue-600"
												target="_blank"
												rel="noopener noreferrer"
											>
												Kinde's privacy policy
											</a>
											.
										</p>
									</div>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<AuthButtons />
				</div>
				<div className="absolute bottom-16 left-0 right-0 overflow-x-auto">
					<Marquee autoFill>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Upstash-00E9A3.svg?style=for-the-badge&logo=Upstash&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white"
								alt="logo"
							/>
						</div>
						<div className="flex items-center gap-1 px-8 py-2">
							<img
								src="https://img.shields.io/badge/Testing%20Library-E33332.svg?style=for-the-badge&logo=Testing-Library&logoColor=white"
								alt="logo"
							/>
						</div>
					</Marquee>
				</div>
			</div>
			<div className="wallpaper flex-1 relative overflow-hidden justify-center items-center hidden md:flex" />
		</div>
	);
};

export default Page;

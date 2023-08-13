import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { AnchorIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

const messages = [
	{
		heading: 'Preloading Data',
		link: '/preload',
	},
	{
		heading: 'Parallel Data Fetching',
		link: '/parallel',
	},
	{
		heading: 'Sequential Data Fetching',
		link: '/sequential',
	}
]

export default async function Home() {
	return (
		<Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[80%] p-4">
			<CardHeader className={title({ size: "sm" })}>
				Welcome to {' '}
				<span className={title({ color: "violet", size: "sm" })}>
					Inspirational Quotes!
				</span>
			</CardHeader>
			<CardBody>
				<p className="leading-normal">
					This is an open source quote app built with{' '}
					<Link
						isExternal
						href="https://nextjs.org"
						showAnchorIcon
					>
						NextJS
					</Link>
					and{' '}
					<Link
						isExternal
						href="https://nextui.org/"
						showAnchorIcon
					>
						NextUI
					</Link>
					.
				</p>
				<p className="leading-normal">
					You can explore different data fetching techniques in this {' '}
					<Link
						isExternal
						href="https://dev.to/minhnc"
						showAnchorIcon
					>
						blog
					</Link>
					.
				</p>
				<p className="mt-6 leading-normal">
					Click on one of below links to see beautiful quotes:
				</p>
			</CardBody>
			<CardFooter>
				<div className="flex flex-col px-4">
					{messages.map((message, index) => (
						<Link
							key={index}
							isBlock
							href={message.link}
							color="secondary"
							as={NextLink}
							showAnchorIcon
							anchorIcon={<AnchorIcon />}
						>
							{message.heading}
						</Link>

					))}
				</div>
			</CardFooter>
		</Card>
	);
}

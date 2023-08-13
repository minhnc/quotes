import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { AnchorIcon } from "@/components/icons";
import { title } from "@/components/primitives";

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
		<div className="mx-auto max-w-2xl px-4">
			<div className="rounded-lg border bg-background p-8">
				<h1 className={title({ size: "sm" })}>
					Welcome to {' '}
					<span className={title({ color: "violet", size: "sm" })}>
						Inspirational Quotes!
					</span>
				</h1>
				<p className="my-2 leading-normal text-muted-foreground">
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
				<p className="leading-normal text-muted-foreground">
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
				<p className="mt-6 leading-normal text-muted-foreground">
					And click on one of below links to see beautiful quotes:
				</p>
				<div className="mt-4 flex flex-col items-start space-y-2">
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
			</div>
		</div>
	);
}

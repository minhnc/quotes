import { Suspense } from "react";

import { getPhoto, getQuote } from "@/lib/api";

import QuoteCard from "@/components/quote-card";
import BackgroundImage from "@/components/bg-image";
import QuoteCardSkeleton from "@/components/quote-card-skeleton";


export default async function Preloading() {
	getPhoto()
	getQuote()

	return (
		<>
			{/* @ts-expect-error Server Component */}
			<BackgroundImageContainer />

			<Suspense fallback={<QuoteCardSkeleton />}>
				{/* @ts-expect-error Server Component */}
				<QuoteCardContainer />
			</Suspense>
		</>
	);
}

const BackgroundImageContainer = async () => {
	const photo = await getPhoto()

	return (
		<BackgroundImage
			url={photo.urls.raw}
			alt={photo.alt_description}
			info={photo.location.name ?? 'Photo on Unsplash'}
		/>
	)
}

const QuoteCardContainer = async () => {
	const quote = await getQuote()

	return (
		<QuoteCard quote={quote.quote} author={quote.author} />
	)
}



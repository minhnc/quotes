import QuoteCard from "@/components/quote-card";
import BackgroundImage from "@/components/bg-image";
import { getPhoto, getQuote } from "@/lib/api";

export default async function Preloading() {
	getPhoto()
	getQuote()

	return (
		<>
			<BackgroundImageContainer />
			<QuoteCardContainer />
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

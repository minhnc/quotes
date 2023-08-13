import QuoteCard from "@/components/quote-card";
import BackgroundImage from "@/components/bg-image";
import { getPhoto, getQuote } from "@/lib/api";

export default async function ParallelFetching() {
	const [photo, quote] = await Promise.all([getPhoto(), getQuote()])

	return (
		<>
			<BackgroundImage url={photo.urls.raw} alt={photo.alt_description} info={photo.location.name ?? 'Photo on Unsplash'} />
			<QuoteCard quote={quote.quote} author={quote.author} />
		</>
	);
}

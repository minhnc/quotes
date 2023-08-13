import QuoteCard from "@/components/quote-card";
import BackGroundImage from "@/components/bg-image";
import { getPhoto, getQuote } from "@/lib/api";

export default async function Home() {
	const [photo, quote] = await Promise.all([getPhoto(), getQuote()])

	return (
		<>
			<BackGroundImage url={photo.urls.raw} alt={photo.alt_description} info={photo.location.name ?? 'Photo on Unsplash'} />
			<QuoteCard quote={quote.quote} author={quote.author} />
		</>
	);
}

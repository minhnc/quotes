import QuoteCard from "@/components/quote-card";
import BackGroundImage from "@/components/bg-image";

type Photo = {
	urls: Record<'raw' | 'full' | 'regular', string>
	alt_description: string
	location: {
		name?: string
	}
}

async function getPhoto(): Promise<Photo> {
	const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature', {
		headers: {
			Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`
		},
		next: { revalidate: 5 * 60 }
	})

	if (!res.ok) {
		throw new Error('Failed to fetch photo')
	}

	return res.json() as Promise<Photo>
}

type Quote = {
	quote: string
	author: string
}

async function getQuote(): Promise<Quote> {
	const res = await fetch('https://dummyjson.com/quotes/random', {
		cache: 'no-cache'
	})

	if (!res.ok) {
		throw new Error('Failed to fetch quote')
	}

	return res.json() as Promise<Quote>
}

export default async function Home() {
	const photo = await getPhoto()
	const quote = await getQuote()

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<BackGroundImage url={photo.urls.raw} alt={photo.alt_description} info={photo.location.name ?? 'Photo on Unsplash'} />
			<QuoteCard quote={quote.quote} author={quote.author} />
		</section >
	);
}

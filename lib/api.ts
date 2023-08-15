import { Photo, Quote } from "@/lib/types";

export async function getPhoto(): Promise<Photo> {
	// Synthetic delay
	// await delay(3000)

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

export async function getQuote(): Promise<Quote> {
	// Synthetic delay
	// await delay(3000)

	const res = await fetch('https://dummyjson.com/quotes/random', {
		cache: 'no-cache'
	})

	if (!res.ok) {
		throw new Error('Failed to fetch quote')
	}

	return res.json() as Promise<Quote>
}

function delay(n: number) {
	return new Promise(r => setTimeout(r, n))
}
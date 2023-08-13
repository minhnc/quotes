export type Photo = {
	urls: Record<'raw' | 'full' | 'regular', string>
	alt_description: string
	location: {
		name?: string
	}
}

export type Quote = {
	quote: string
	author: string
}
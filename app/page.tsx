import QuoteCard from "@/components/quote-card";
import BackGroundImage from "@/components/bg-image";

export default function Home() {
	const quote = 'Make beautiful websites regardless of your design experience.'
	const author = 'Author Name'
	const url = 'https://images.unsplash.com/photo-1488137881216-5bea4b9bac2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzODM2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTE2NTk2MTd8&ixlib=rb-4.0.3&q=80&w=1080'

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<BackGroundImage url={url} alt="..." info="Photo on Unsplash" />
			<QuoteCard quote={quote} author={author} />
		</section >
	);
}

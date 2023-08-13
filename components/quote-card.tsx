import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

import { title } from "@/components/primitives";
import QuoteCardButton from '@/components/quote-card-button';

type QuoteCardProps = {
    quote: string,
    author: string,
}

export default function QuoteCard({ quote, author }: QuoteCardProps) {
    const fontSize = quote.length > 100 ? { fontSize: '1.5em' } : {}

    return (
        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 max-w-[80%] z-10">
            <CardBody>
                <div className="inline-block max-w-lg text-center justify-center overflow-y-hidden">
                    <div className="h-3 text-3xl text-left">“</div>
                    <h1 className={title({ size: "sm" })} style={fontSize}>
                        {quote}
                    </h1>
                    <div className="h-3 text-3xl text-right">”</div>
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="justify-between p-4">
                <h4 className={title({ color: "violet", size: "sm" })}>
                    {author}
                </h4>

                <QuoteCardButton />
            </CardFooter>
        </Card>
    )
}
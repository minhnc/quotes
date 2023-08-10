import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

import { title } from "@/components/primitives";
import { NextIcon } from "@/components/icons";

type QuoteCardProps = {
    quote: string,
    author: string
}

export default function QuoteCard({ quote, author }: QuoteCardProps) {
    return (
        <Card className="max-w-[80%] z-10">
            <CardBody>
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>
                        {quote}
                    </h1>
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="justify-between p-4">
                <h4 className={title({ color: "violet", size: "sm" })}>
                    {author}
                </h4>

                <Button isIconOnly color="default" variant="light" aria-label="Next quote">
                    <NextIcon className="text-default-500" />
                </Button>
            </CardFooter>
        </Card>
    )
}
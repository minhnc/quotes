'use client'

import { useRouter } from 'next/navigation';
import { Button } from "@nextui-org/button";

import { NextIcon } from "@/components/icons";


export default function QuoteCardButton() {
    const router = useRouter()
    const onNext = () => router.refresh()

    return (
        <Button onClick={onNext} isIconOnly color="default" variant="light" aria-label="Next quote">
            <NextIcon className="text-default-500" />
        </Button>
    )
}

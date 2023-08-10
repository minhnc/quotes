import { Snippet } from "@nextui-org/snippet";

type PhotoInfoProps = {
    info: string
}

export default function PhotoInfo({ info }: PhotoInfoProps) {
    return (
        <div className="fixed bottom-0 right-0 z-10">
            <Snippet hideSymbol hideCopyButton variant="flat">
                <span>
                    {info}
                </span>
            </Snippet>
        </div>
    )
}
import { Image } from "@nextui-org/image";
import PhotoInfo from "./photo-info";

type BackGroundImageProps = {
    url: string
    alt: string
    info: string
}

export default function BackGroundImage({ url, alt, info }: BackGroundImageProps) {
    return (
        <>
            <Image
                isBlurred
                isZoomed
                src={url}
                alt={alt}
                radius="none"
                loading="lazy"
                className="fixed top-0 left-0 right-0 w-full h-full"
            />
            <PhotoInfo info={info} />
        </>
    )
}
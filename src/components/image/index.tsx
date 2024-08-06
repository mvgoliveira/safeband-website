import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface IImage {
    uri: string;
    link?: string;
    alt?: string;
    width: number;
    height: number;
}

export const ImageComponent = ({
    uri,
    width,
    height,
    alt = "ilustração do monitoramento",
    link = "",
}: IImage): ReactElement => {
    if (link) {
        return (
            <Link href={link} target="_blank" rel="noreferrer" title={alt}>
                <Image
                    src={uri}
                    width={width}
                    height={height}
                    alt={alt}
                    title={alt}
                    loading="lazy"
                />
            </Link>
        );
    }

    return (
        <div
            style={{
                width: "max-content",
                height: "max-content",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image src={uri} width={width} height={height} alt={alt} title={alt} loading="lazy" />
        </div>
    );
};

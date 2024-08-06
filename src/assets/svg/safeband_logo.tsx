import { Theme } from "@/themes/index";
import { ReactElement } from "react";

export const IconSafeBandLogo = ({
    width = 31,
    height = 28,
    color = "white",
}: ColorIcons): ReactElement => {
    const svgColor = Theme.colors[color];

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 31 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.7767 14.0662C25.71 14.0662 29.7093 18.0655 29.7093 22.9988L29.7093 24.5207L19.7842 24.5207L19.7842 14.0662L20.7767 14.0662Z"
                stroke={svgColor}
                strokeWidth="0.661678"
            />
            <path
                d="M29.7093 5.00116C29.7093 9.93453 25.71 13.9338 20.7767 13.9338L19.7842 13.9338L19.7842 1.09726L29.7093 1.09726L29.7093 5.00116Z"
                stroke={svgColor}
                strokeWidth="0.661678"
            />
            <path
                d="M7.07992 11.3534C7.07992 5.68921 11.6717 1.09744 17.3359 1.09744H19.7841V13.934H7.07992V11.3534Z"
                stroke={svgColor}
                strokeWidth="0.661678"
            />
            <path
                d="M13.0351 16.6466C13.0351 22.3108 8.4433 26.9026 2.77907 26.9026L0.330854 26.9026L0.330856 14.066L13.0351 14.066L13.0351 16.6466Z"
                stroke={svgColor}
                strokeWidth="0.661678"
            />
        </svg>
    );
};

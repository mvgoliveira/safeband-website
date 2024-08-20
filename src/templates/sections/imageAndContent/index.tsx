import { Button } from "@/components/button";
import ContentAlign from "@/components/contentAlign";
import TwoColumns from "@/components/grids/twoColumns";
import { ImageComponent } from "@/components/image";
import { Typography } from "@/components/typography";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ReactElement } from "react";

import { themeConfig, Variants } from "./constants";

type Content = {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonAction?: string;
    buttonIcon?: ReactElement;
    buttonIconAlign?: string;
    imageUri?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    contentWidthTablet?: string;
    contentWidthDesktop?: string;
    contentWidthMobile?: string;
};

type PropTypes = {
    theme?: Variants;
    backgroundSource?: string;
    desktopPadding?: string;
    mobilePadding?: string;
    leftContent: undefined | Content;
    rightContent: undefined | Content;
    $mobileContentDirection?: "normal" | "inverse";
    $mobileButtonSize?: "normal" | "full";
};

export default function ImageAndContent({
    theme = "light",
    leftContent = undefined,
    rightContent = undefined,
    desktopPadding = "100px 20px",
    mobilePadding = "30px 20px",
    backgroundSource = "default",
    $mobileContentDirection = "normal",
    $mobileButtonSize = "normal",
}: PropTypes): ReactElement {
    const windowsSize = useWindowSize();

    return (
        <TwoColumns
            padding={windowsSize.width > 900 ? desktopPadding : mobilePadding}
            backgroundSource={backgroundSource}
            backgroundContent={themeConfig[theme].backgroundColor}
        >
            <TwoColumns.ColumnsContent
                $mobileButtonSize={$mobileButtonSize}
                $mobileContentDirection={$mobileContentDirection}
                gutter={windowsSize.width < 1140 ? [180, 28] : [50, 28]}
            >
                <TwoColumns.LeftColumnContent columns={12} columnsTablet={24} columnsMobile={24}>
                    <ContentAlign
                        contentDirection="column"
                        contentAlignMainAxis={leftContent?.imageUri ? "center" : "center"}
                        contentAlignSecondaryAxis={leftContent?.imageUri ? "center" : "start"}
                    >
                        {leftContent?.title && (
                            <div
                                style={{
                                    margin: "0 0 20px 0",
                                    width:
                                        windowsSize.width > 900
                                            ? leftContent.contentWidthDesktop
                                            : leftContent.contentWidthMobile,
                                }}
                            >
                                <Typography
                                    tag="h2"
                                    color={themeConfig[theme].headingColor}
                                    fontSize={{ xs: "fs400" }}
                                    fontWeight="medium"
                                    fontFamily="inter"
                                >
                                    {leftContent.title}
                                </Typography>
                            </div>
                        )}

                        {leftContent?.description && (
                            <div
                                style={{
                                    margin: "0 0 20px 0",
                                    width:
                                        windowsSize.width > 900
                                            ? leftContent.contentWidthDesktop
                                            : leftContent.contentWidthMobile,
                                }}
                            >
                                <Typography
                                    tag="p"
                                    color={themeConfig[theme].paragraphColor}
                                    fontSize={{ xs: "fs100" }}
                                    fontWeight="regular"
                                    fontFamily="roboto"
                                >
                                    {leftContent.description}
                                </Typography>
                            </div>
                        )}

                        {leftContent?.buttonText && (
                            <Button padding="10px 30px">
                                <Typography
                                    tag="p"
                                    fontSize={{ xs: "fs100" }}
                                    fontWeight="regular"
                                    fontFamily="roboto"
                                >
                                    {leftContent.buttonText}
                                </Typography>
                                {leftContent.buttonIcon}
                            </Button>
                        )}

                        {leftContent?.imageUri &&
                            leftContent.imageHeight &&
                            leftContent.imageWidth && (
                                <ImageComponent
                                    uri={leftContent.imageUri}
                                    alt={leftContent.imageAlt || undefined}
                                    width={
                                        windowsSize.width < 580
                                            ? windowsSize.width - 50
                                            : (leftContent.imageWidth as number)
                                    }
                                    height={
                                        windowsSize.width < 580
                                            ? (leftContent.imageHeight / leftContent.imageWidth) *
                                                  windowsSize.width -
                                              45
                                            : (leftContent.imageHeight as number)
                                    }
                                />
                            )}
                    </ContentAlign>
                </TwoColumns.LeftColumnContent>

                <TwoColumns.RightColumnContent columns={12} columnsTablet={24} columnsMobile={24}>
                    <ContentAlign
                        contentDirection="column"
                        contentAlignMainAxis={rightContent?.imageUri ? "center" : "center"}
                        contentAlignSecondaryAxis={rightContent?.imageUri ? "center" : "start"}
                    >
                        {rightContent?.title && (
                            <div
                                style={{
                                    margin: "0 0 20px 0",
                                    width:
                                        windowsSize.width > 900
                                            ? rightContent.contentWidthDesktop
                                            : rightContent.contentWidthMobile,
                                }}
                            >
                                <Typography
                                    tag="h2"
                                    color={themeConfig[theme].headingColor}
                                    fontSize={{ xs: "fs400" }}
                                    fontWeight="medium"
                                    fontFamily="inter"
                                >
                                    {rightContent.title}
                                </Typography>
                            </div>
                        )}

                        {rightContent?.description && (
                            <div
                                style={{
                                    margin: "0 0 20px 0",
                                    width:
                                        windowsSize.width > 900
                                            ? rightContent.contentWidthDesktop
                                            : rightContent.contentWidthMobile,
                                }}
                            >
                                <Typography
                                    tag="p"
                                    color={themeConfig[theme].paragraphColor}
                                    fontSize={{ xs: "fs100" }}
                                    fontWeight="regular"
                                    fontFamily="roboto"
                                >
                                    {rightContent.description}
                                </Typography>
                            </div>
                        )}

                        {rightContent?.buttonText && (
                            <Button padding="10px 30px">
                                <Typography
                                    tag="p"
                                    fontSize={{ xs: "fs100" }}
                                    fontWeight="regular"
                                    fontFamily="roboto"
                                >
                                    {rightContent.buttonText}
                                </Typography>

                                {rightContent.buttonIcon}
                            </Button>
                        )}

                        {rightContent?.imageUri &&
                            rightContent.imageWidth &&
                            rightContent.imageHeight && (
                                <ImageComponent
                                    uri={rightContent.imageUri}
                                    alt={rightContent.imageAlt || undefined}
                                    width={
                                        windowsSize.width < 500
                                            ? windowsSize.width - 50
                                            : (rightContent.imageWidth as number)
                                    }
                                    height={
                                        windowsSize.width < 500
                                            ? (rightContent.imageHeight / rightContent.imageWidth) *
                                                  windowsSize.width -
                                              45
                                            : (rightContent.imageHeight as number)
                                    }
                                />
                            )}
                    </ContentAlign>
                </TwoColumns.RightColumnContent>
            </TwoColumns.ColumnsContent>
        </TwoColumns>
    );
}

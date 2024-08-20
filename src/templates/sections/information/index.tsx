"use client";

import { Typography } from "@/components/typography";
import { Theme } from "@/themes";
import { ReactElement } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, Content, IconContainer, Item, ItemContent, ScrollDownButton } from "./styles";

interface IInformationSectionProps {
    data: {
        icon: ReactElement;
        title: string;
        descriptions: string[];
    }[];
}

export default function InformationSection({ data }: IInformationSectionProps): ReactElement {
    return (
        <Container>
            <Content>
                {data.map(item => (
                    <Item>
                        <ItemContent>
                            <IconContainer>{item.icon}</IconContainer>

                            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                <Typography
                                    tag="span"
                                    color="black"
                                    fontFamily="roboto"
                                    fontSize={{ xs: "fs75" }}
                                    fontWeight="semibold"
                                >
                                    {item.title}
                                </Typography>

                                {item.descriptions.map(description => (
                                    <Typography
                                        tag="p"
                                        color="gray70"
                                        fontFamily="roboto"
                                        fontSize={{ xs: "fs75" }}
                                        fontWeight="regular"
                                    >
                                        {description}
                                    </Typography>
                                ))}
                            </div>
                        </ItemContent>
                    </Item>
                ))}
            </Content>

            <ScrollDownButton type="button">
                <MdKeyboardArrowDown size={25} color={Theme.colors.white} />
            </ScrollDownButton>
        </Container>
    );
}

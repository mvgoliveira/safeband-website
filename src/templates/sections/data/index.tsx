import { Typography } from "@/components/typography";
import { ReactElement } from "react";

import { Container, Item } from "./styles";

interface IDataListProps {
    data: {
        title: string;
        description: string;
    }[];
}

export const DataSection = ({ data }: IDataListProps): ReactElement => (
    <Container>
        {data.map(item => (
            <Item>
                <Typography
                    tag="span"
                    color="white"
                    fontFamily="roboto"
                    fontSize={{ xs: "fs400" }}
                    fontWeight="medium"
                    $textAlign="center"
                >
                    {item.title}
                </Typography>

                <Typography
                    tag="p"
                    color="white"
                    fontFamily="roboto"
                    fontSize={{ xs: "fs75" }}
                    fontWeight="medium"
                    $textAlign="center"
                >
                    {item.description}
                </Typography>
            </Item>
        ))}
    </Container>
);

import { Typography } from "@/components/typography";
import { ReactElement } from "react";

import { Container, Content, Item } from "./styles";

interface IDataListProps {
    data: {
        title: string;
        description: string;
    }[];
}

export const DataList = ({ data }: IDataListProps): ReactElement => (
    <Container>
        <Content>
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
                        tag="span"
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
        </Content>
    </Container>
);

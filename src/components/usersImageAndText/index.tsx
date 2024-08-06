import { Typography } from "@/components/typography";
import { Theme } from "@/themes";
import Image from "next/image";
import { ReactElement } from "react";
import { MdAdd } from "react-icons/md";

import { Container, ImageContainer, ImagesContainer } from "./styles";

interface IUsersImageAndTextProps {
    users: {
        name: string;
        imageUrl: string;
    }[];
    text: string;
}

export const UsersImageAndText = ({ users, text }: IUsersImageAndTextProps): ReactElement => (
    <Container>
        <ImagesContainer>
            {users.map(user => (
                <ImageContainer>
                    <Image src={user.imageUrl} fill={true} objectFit="cover" alt={user.name} />
                </ImageContainer>
            ))}

            <ImageContainer>
                <MdAdd size={15} color={Theme.colors.white} />
            </ImageContainer>
        </ImagesContainer>

        <Typography
            tag="p"
            color="gray90"
            fontFamily="roboto"
            fontSize={{ xs: "fs75" }}
            fontWeight="regular"
        >
            {text}
        </Typography>
    </Container>
);

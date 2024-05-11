import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const Hero = ({ title }: Props) => {
    return (
        <Flex
            py="250px"
            px="300px"
            direction="column"
        >
            <Text
                color={"pureblack"}
                fontSize="90px"
                fontWeight="700"
            >
                {title}
            </Text>

        </Flex>
    )
}
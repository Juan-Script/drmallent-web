import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const Hero = ({ title }: Props) => {
    return (
        <Flex
            pt="150px"
            pb="50px"
            px="300px"
            direction="column"
        >
            <Text
                color="pureblack"
                fontSize="90px"
                fontWeight="700"
                w="80%"
                lineHeight="95%"
            >
                {title}
            </Text>

        </Flex>
    )
}
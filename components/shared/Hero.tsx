import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const Hero = ({ title }: Props) => {
    return (
        <Flex
            py="150px"
            px={{ "2xl": "300px", xl: "200px", lg: "200px" }}
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
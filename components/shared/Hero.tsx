import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const Hero = ({ title }: Props) => {
    return (
        <Flex
            py={{ base: "100px", sm: "150px" }}
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            direction="column"
        >
            <Text
                color="pureblack"
                fontWeight="700"
                fontSize={{ base: "40px", sm: "50px", md: "70px", lg: "90px" }}
                w="80%"
                lineHeight="95%"
            >
                {title}
            </Text>

        </Flex>
    )
}
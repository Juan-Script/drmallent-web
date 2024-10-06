import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Flex,
} from '@chakra-ui/react'

interface Props {
    data: {
        title: string;
        text: string;
    }[]
}

export default function AccordionComponent({ data }: Props) {
    return (
        <Flex
            py={{ base: "30px", md: "50px" }}
            pb={{ base: "50px", md: "100px" }}
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            w="100%"
        >
            <Accordion
                defaultIndex={[0]}
                allowMultiple
                w="100%"
            >
                {data?.map(({ text, title }, index) => (
                    <AccordionItem
                        key={index}
                        border="none"
                    >
                        <AccordionButton
                            borderBottom={"1px solid"}
                            borderColor={"#DDDDDD"}
                            display="flex"
                            w="100%"
                            alignItems="center"
                            gap={{ base: "10px", md: "20px" }}
                            py={{ base: "10px", md: "15px" }}
                        >
                            <AccordionIcon />

                            <Text
                                color="black"
                                fontSize={{ base: "10px", md: "12px" }}
                                fontWeight="400"
                                textTransform="uppercase"
                                letterSpacing="0.666667px"
                            >
                                {title}
                            </Text>
                        </AccordionButton>

                        <AccordionPanel
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }}
                            gap={{ base: "20px", md: "60px", lg: "140px" }}
                            p={{ base: "15px", md: "20px" }}
                        >
                            <Text
                                w={{ base: "100%", md: "50%", lg: "30%" }}
                                color="black"
                                fontSize={{ base: "18px", md: "24px" }}
                                fontWeight="400"
                                mb={{ base: "10px", md: "0" }}
                            >
                                {title}
                            </Text>

                            <Text
                                w={{ base: "100%", md: "60%" }}
                                color="secondary_font"
                                fontSize={{ base: "12px", md: "14px" }}
                                fontWeight="300"
                            >
                                {text}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Flex>
    )
}

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
            py="120px"
            px="300px"
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
                            gap="20px"
                        >
                            <AccordionIcon />

                            <Text
                                color="black"
                                fontSize="12px"
                                fontWeight="400"
                                lineHeight="20px"
                                letterSpacing="0.267px"
                            >
                                {title}
                            </Text>
                        </AccordionButton>

                        <AccordionPanel
                            display={"flex"}
                            gap="140px"
                            p="20px"
                        >
                                <Text
                                    w="25%"
                                    color="black"
                                    fontSize="20px"
                                    fontWeight="400"
                                    letterSpacing="0.667px"
                                >
                                    {title}
                                </Text>

                                <Text
                                    w="60%"
                                    color="secondary_font"
                                    fontSize="12px"
                                    fontWeight="400"
                                    lineHeight="20px"
                                    letterSpacing="0.267px"
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

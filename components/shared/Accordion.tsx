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
            py="50px"
            pb="100px"
            px={{"2xl":"300px", xl:"200px", lg:"200px"}}
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
                                textTransform="uppercase"
                                letterSpacing="0.666667px"
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
                                    fontSize="24px"
                                    fontWeight="400"
                                >
                                    {title}
                                </Text>

                                <Text
                                    w="60%"
                                    color="secondary_font"
                                    fontSize="14px"
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

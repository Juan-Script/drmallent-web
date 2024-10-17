import { cvInt } from "@/data/cv"
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";

interface Porps {
    profesional: cvInt;
}

export default function Perfil({ profesional }: Porps) {
    return (
        <Flex
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            direction={{ base: "column", lg: "row" }}
        >
            <Flex
                direction={{ base: "column", sm: "row", xl: "column" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                mb={{ base: "40px", lg: "0" }}
                gap={{ base: "0px", sm: "20px", lg: "0px"}}
            >
                <Image
                    src={profesional?.imagen}
                    alt={profesional?.nombre}
                    width={200}
                    height={450}
                />

                <Flex
                    direction="column"
                    alignItems={{ base: "center", sm: "flex-start" }}
                >
                    <Text
                        mt="35px"
                        mb="30px"
                        fontSize={{ base: "14px", lg: "12px"}}
                        fontWeight="400"
                        lineHeight="13.2px"
                        letterSpacing="0.667px"
                        textAlign={{ base: "center", md: "left" }}
                        pl={{ base: "0px", sm: "10px"}}
                    >
                        {profesional?.nombre}
                    </Text>

                    <Text
                        color="secondary_font"
                        fontSize="17px"
                        fontWeight="400"
                        lineHeight="20px"
                        letterSpacing="0.267px"
                        textAlign={{ base: "center", md: "left" }}
                        pl={{ base: "0px", sm: "10px"}}
                    >
                        {profesional?.especialidad}
                    </Text>

                    <Text
                        color="secondary_font"
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="20px"
                        letterSpacing="0.267px"
                        textAlign={{ base: "center", md: "left" }}
                        pl={{ base: "0px", sm: "10px"}}
                    >
                        {profesional?.locacion}
                    </Text>

                    <UnorderedList
                        mt="35px"
                        styleType="'-'"
                        color="secondary_font"
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="20px"
                        letterSpacing="0.267px"
                        gap="5px"
                        display="flex"
                        flexDir="column"
                        pl={{ base: "20px", sm: "0" }}
                    >
                        {profesional?.items.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </UnorderedList>
                </Flex>
            </Flex>

            <Box
                display="block"
                ml={{ base: "0", lg: "50px" }}
                mr={{ base: "0", lg: "30px" }}
                my={{ base: "20px", lg: "0" }}
                w={{ base: "100%", lg: "1px" }}
                h={{ base: "1px", lg: "auto" }}
                bg="pureblack"
            />

            <Flex
                direction="column"
                gap={{ base: "40px", md: "70px" }}
            >
                {profesional?.detalles.map(({ titulo, textos, list }, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        gap="20px"
                    >
                        {titulo &&
                            <Text
                                color="secondary_font"
                                fontSize="16px"
                                fontWeight="400"
                                letterSpacing="0.667px"
                                textTransform="uppercase"
                            >
                                {titulo}
                            </Text>
                        }

                        {textos && textos?.map((texto, iTextos) => (
                            <Text
                                key={iTextos}
                                color="secondary_font"
                                fontSize="14px"
                                fontWeight="400"
                                lineHeight="20px"
                                letterSpacing="0.267px"
                            >
                                {texto}
                            </Text>
                        ))}

                        {list &&
                            <UnorderedList
                                styleType="'-'"
                                color="secondary_font"
                                fontSize="14px"
                                fontWeight="400"
                                lineHeight="20px"
                                letterSpacing="0.267px"
                                gap="5px"
                                display="flex"
                                flexDir="column"
                                pl="20px"
                            >
                                {list?.map((item, iList) => (
                                    <ListItem key={iList}>{item}</ListItem>
                                ))}
                            </UnorderedList>
                        }
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

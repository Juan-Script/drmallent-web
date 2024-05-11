import { cvInt } from "@/data/cv"
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";

interface Porps {
    profesional: cvInt;
}

export default function Perfil({ profesional }: Porps) {
    return (
        <Flex
            px="300px"
        >
            <Flex
                direction={"column"}
            >
                <Image
                    src={profesional?.imagen}
                    alt={profesional?.nombre}
                    width={200}
                    height={450}
                />

                <Text
                    mt="35px"
                    mb="30px"
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="13.2px"
                    letterSpacing="0.667px"
                >
                    {profesional?.nombre}
                </Text>

                <Text
                    color={"secondary_font"}
                    fontSize="17px"
                    fontWeight="400"
                    lineHeight="20px"
                    letterSpacing="0.267px"
                >
                    {profesional?.especialidad}
                </Text>

                <Text
                    color={"secondary_font"}
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20px"
                    letterSpacing="0.267px"
                >
                    {profesional?.locacion}
                </Text>

                <UnorderedList
                    mt="35px"
                    styleType="'-'"
                    color={"secondary_font"}
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20px"
                    letterSpacing="0.267px"
                    gap="5px"
                    display="flex"
                    flexDir="column"
                >
                    {profesional?.items.map((item, index) => (
                        <ListItem
                            key={index}
                        >
                            {item}
                        </ListItem>

                    ))}
                </UnorderedList>
            </Flex>

            <Box
                ml="100px"
                mr="65px"
                w="1px"
                bg={"pureblack"}
            />

            <Flex
                direction={"column"}
                gap="70px"
            >
                {profesional?.detalles.map(({ titulo, textos, list }, index) => (
                    <Flex
                        key={index}
                        direction={"column"}
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
                                color={"secondary_font"}
                                fontSize="14px"
                                fontWeight="400"
                                lineHeight="20px"
                                letterSpacing="0.267px"
                                gap="5px"
                                display="flex"
                                flexDir="column"
                            >
                                {list?.map((item, iList) => (
                                    <ListItem
                                        key={iList}
                                    >
                                        {item}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        }
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

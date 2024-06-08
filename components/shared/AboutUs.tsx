import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <Flex
            direction="column"
            gap="30px"
            px={{ xl: "300px", lg: "200px" }}
            py="100px"
        >
            <Flex
                direction="column"
                gap="20px"
            >
                <Flex
                    direction="column"
                    gap="5px"
                >
                    <Text
                        fontSize="16px"
                        textColor="font_variant"
                    >
                        SOBRE NOSOTROS
                    </Text>

                    <Text
                        fontSize="40px"
                        textColor="black"
                    >
                        CLÍNICA DR. MALLENT – CIRUGÍA ESTÉTICA EN VALENCIA
                    </Text>
                </Flex>

                <Text
                    fontSize="16px"
                    textColor="black"
                >
                    En nuestra Clínica de Estética Plástica, tanto en Valencia como en Dénia contamos con una larga trayectoria y un equipo de especialistas con amplia formación en todo tipo de tratamientos estéticos, tanto quirúrgicos como no quirúrgicos. Las excelentes opiniones de nuestros pacientes son nuestra mejor carta de presentación y nos ha posicionado como una de las clínicas de cirugía estética de referencia.
                </Text>
            </Flex>

            <Flex
                gap="20px"
                mx="auto"
            >
                <Image
                    src={'/imgAboutUs1.png'}
                    alt='imgAboutUs'
                    height={440}
                    width={240}
                />

                <Image
                    src={'/imgAboutUs2.png'}
                    alt='imgAboutUs'
                    height={440}
                    width={240}
                />

                <Flex
                    maxH="240px"
                    direction="column"
                >


                    <Image
                        src={'/imgAboutUs3.png'}
                        alt='imgAboutUs'
                        objectFit='cover'
                        height={240}
                        width={240}
                    />

                    <Flex
                        mt="50px"
                        ml="30px"
                        gap="60px"
                    >
                        <Flex
                            direction="column"
                            maxW="163px"
                        >
                            <Text
                                fontSize="40px"
                                color="font_variant"
                            >
                                2K+
                            </Text>

                            <Text
                                fontSize="16px"
                                letterSpacing={4}
                            >
                                CIRUGÍAS CON ÉXITO
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            maxW="163px"
                        >
                            <Text
                                fontSize="40px"
                                color="font_variant"
                            >
                                20+
                            </Text>

                            <Text
                                fontSize="16px"
                                letterSpacing={4}
                            >
                                TRABAJADORES
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            maxW="163px"
                        >
                            <Text
                                fontSize="40px"
                                color="font_variant"
                            >
                                300+
                            </Text>

                            <Text
                                fontSize="16px"
                                letterSpacing={4}
                            >
                                CLIENTES
                            </Text>
                        </Flex>

                        {/* <Link
                            href="/galeria"
                        >
                            <Button
                                rounded="full"
                                color="font"
                                bg="transparent"
                                border="1px"
                                borderColor="font"
                                p="10px"
                                px="20px"
                                letterSpacing={4}
                                maxW="230px"
                            >
                                DESCUBRE MÁS
                            </Button>
                        </Link> */}
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}

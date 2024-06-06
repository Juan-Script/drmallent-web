import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function HeroHome() {
    return (
        <Flex
            bgImage={'url(/BGHero.png)'}
            bgSize="cover"
            bgPosition="left center"
            maxH="700px"
            w="full"
            h="100vh"
            pos="relative"
            fontFamily="theinhardt"
        >
            <Flex
                textColor="white"
                direction="column"
                gap="40px"
                pos="absolute"
                top="200px"
                right="300px"
                maxW="400px"
            >
                <Text
                    fontSize="40px"
                    fontWeight={700}
                >
                    Cirugía responsable
                </Text>

                <Text
                    fontSize="16px"
                    fontWeight={400}
                >
                    Apuesto por una cirugía responsable, que no cree en el mercado de las apariencias sino en mejorar la belleza natural e intrínseca de cada individuo.
                </Text>
            </Flex>
        </Flex>
    )
}

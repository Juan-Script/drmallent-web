import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts() {
    const posts = [
        {
            image: "/img/PostRecibidor.jpg",
            text: "Nuestra clínica también es un espacio que transmite serenidad.",
            href: "https://www.instagram.com/reel/CxI-f2rtCzA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: "/img/Instagram3.png",
            text: "Depende de la anatomía y necesidades de cada paciente, el aumento de mama puede realizarse por encima o por debajo del músculo.",
            href: "https://www.instagram.com/p/C2SORzlty4J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: "/img/FirmaPost.jpg",
            text: "Estaremos encantados de asesorarte para que estas navidades el mejor regalo sea cuidar de ti.",
            href: "https://www.instagram.com/p/C0bDdDSN9GD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
    ]
    return (
        <Flex
            direction="column"
            align="center"
            gap={{ base: "20px", md: "40px" }}
            py={{ base: "50px", md: "100px" }}
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
        >
            <Flex
                align="center"
                direction="column"
                textAlign="center"
            >
                <Text
                    fontSize={{ base: "14px", md: "16px" }}
                    color="secondary_font"
                    letterSpacing={4}
                    fontWeight="400"
                >
                    INSTAGRAM
                </Text>
                <Text
                    fontSize={{ base: "32px", md: "40px" }}
                    fontWeight={700}
                    color="font"
                >
                    dr.mallent
                </Text>
            </Flex>

            <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                spacing={{ base: "30px", md: "30px" }}
                w="100%"
                maxW="1200px"
            >
                {posts?.map((post, index) => (
                    <Link
                        key={index}
                        href={post.href}
                        target='_blank'
                    >
                        <Flex
                            direction="column"
                            maxW="100%"
                        >
                            <Flex>
                                <Image
                                    src={post.image}
                                    alt="Post"
                                    width={363}
                                    height={268}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                            </Flex>

                            <Text
                                fontSize={{ base: "14px", md: "16px" }}
                                color="secondary_font"
                                mt="20px"
                                h="100px"
                            >
                                {post.text}
                            </Text>
                            <Link
                                href={post.href}
                            >
                                <Flex
                                    gap="5px"
                                    mt="10px"
                                    alignItems="center"
                                >
                                    <Text
                                        fontSize={{ base: "14px", md: "16px" }}
                                        letterSpacing={4}
                                        fontWeight={600}
                                    >
                                        VER MÁS
                                    </Text>

                                    <Image
                                        src="/rightArrow.svg"
                                        alt="arrow"
                                        width={14}
                                        height={14}
                                    />
                                </Flex>
                            </Link>
                        </Flex>
                    </Link>
                ))}
            </SimpleGrid>

            <Flex
                bg="black"
                h="1px"
                w="full"
                maxW="1440px"
                mt={{ base: "30px", md: "40px" }}
            />
        </Flex>
    )
}

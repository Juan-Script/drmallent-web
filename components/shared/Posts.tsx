import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts() {
    const posts = [
        {
            image: "/img/Instagram1.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
        {
            image: "/img/Instagram2.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
        {
            image: "/img/Instagram3.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
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
                        href="https://www.instagram.com/dr.mallent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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

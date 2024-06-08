import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts() {
    const posts = [
        {
            image: "/imgInsta1.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
        {
            image: "/imgInsta2.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
        {
            image: "/imgInsta3.png",
            text: "Posuere urna nec tincidunt praesent egestas maecenas.",
            href: ""
        },
    ]
    return (
        <Flex
            direction="column"
            align="center"
            gap="40px"
            py="100px"
            px={{ "2xl": "300px", xl: "200px", lg: "200px" }}
        >
            <Flex
                align="center"
                direction="column"
            >
                <Text
                    fontSize="16px"
                    color="secondary_font"
                    letterSpacing={4}
                    fontWeight="400"
                >
                    INSTAGRAM
                </Text>
                <Text
                    fontSize="40px"
                    fontWeight={700}
                    color="font"
                >
                    dr.mallent
                </Text>
            </Flex>

            <Flex
                gap="30px"
            >
                {posts?.map((post, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        maxW="360px"
                    >
                        <Flex
                            maxH="260px"
                        >
                            <Image
                                src={post.image}
                                alt="Post"
                                width={480}
                                height={515}
                            />
                        </Flex>

                        <Text
                            fontSize="16px"
                            color="secondary_font"
                            mt="30px"
                        >
                            {post.text}
                        </Text>
                        <Link
                            href={post.href}
                        >
                            <Flex
                                gap="5px"
                                mt="20px"
                            >
                                <Text
                                    fontSize="16px"
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

                ))}
            </Flex>

            <Flex
                bg="black"
                h="1px"
                w="full"
                maxW="1440px"
                mt="20px"
            />
        </Flex>
    )
}

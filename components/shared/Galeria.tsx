import { Flex } from "@chakra-ui/react"
import Image from "next/image"


export default function Galeria() {
    const posts = [
        {
            img: "/imgPost1.png"
        },
        {
            img: "/imgPost2.png"
        },
        {
            img: "/imgPost3.png"
        },
        {
            img: "/imgPost4.png"
        },
    ]
    return (
        <Flex
            py="100px"
            w="full"
        >
            {posts?.map((post, index) => (
                <Flex
                    key={index}
                    w="full"
                >
                    <Image
                        src={post.img}
                        alt="Post"
                        width={680}
                        height={515}
                    />
                </Flex>
            ))}
        </Flex>
    )
}

import { Flex } from "@chakra-ui/react"
import Image from "next/image"


export default function Galeria() {
    const posts = [
        {
            img: "/img/DespachoPrincipal3.jpg"
        },
        {
            img: "/img/SalaCuras3.jpg"
        },
        {
            img: "/img/Despacho1.jpg"
        },
        {
            img: "/img/SalaEspera1.jpg"
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

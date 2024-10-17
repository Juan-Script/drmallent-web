import { Flex, SimpleGrid, Box } from "@chakra-ui/react"
import Image from "next/image"


export default function Galeria() {
    const posts = [
        {
            img: "/img/Carrusel1.png"
        },
        {
            img: "/img/Carrusel2.png"
        },
        {
            img: "/img/Carrusel3.png"
        },
        {
            img: "/img/Carrusel4.png"
        },
    ]

    return (
        <Flex py="50px" w="full">
            <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 4 }}
                spacing={{ base: 4, sm: 6, lg: 8 }}
                w="full"
            >
                {posts?.map((post, index) => (
                    <Box key={index} position="relative" paddingTop="75%">
                        <Image
                            src={post.img}
                            alt={`Imagen ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

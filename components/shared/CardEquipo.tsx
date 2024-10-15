import { Button, Flex, ListItem, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
    src: string;
    nombre: string;
    especialidad: string;
    locacion: string;
    items: string[];

}

export default function CardEquipo({
    src,
    nombre, 
    especialidad,
    locacion,
    items
}: Props) {
    const imagenSize = useBreakpointValue({
        base: { width: 340, height: 370 },
        sm: { width: 485, height: 565 },
        md: { width: 485, height: 565 },
        lg: { width: 485, height: 565 }
    })

    return (
        <Flex
            direction="column"
            gap="30px"
            minW={"485px"}
        >
            <Image
                src={src}
                alt={nombre}
                width={imagenSize?.width}
                height={imagenSize?.height}
                objectFit="cover"
                priority={0 < 2}
                quality={100}
            />

            <Flex
                direction="column"
                gap="10px"
            >
                <Text
                    color={"black"}
                    fontSize="24px"
                    fontWeight="400"
                    lineHeight="39.68px"
                    letterSpacing="0.021px"
                >
                    {nombre}
                </Text>

                <Text
                    color={"secondary_font"}
                    fontSize="15px"
                    fontWeight="400"
                    lineHeight="20px"
                    letterSpacing="0.267px"
                >
                    {especialidad}
                </Text>

                <Text
                    color={"secondary_font"}
                    fontSize="15px"
                    fontWeight="700"
                    lineHeight="20px"
                    letterSpacing="0.267px"
                >
                    {locacion}
                </Text>
            </Flex>

            <UnorderedList
                styleType="'-'"
                color={"secondary_font"}
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing="0.267px"
            >
                {items.map((item, index) => (
                    <ListItem 
                        key={index}
                    >
                        {item}
                    </ListItem>
                
                ))}
            </UnorderedList>

            <Button
                w="fit-content"
                h={"fit-content"}
                bg="inherit"
                border={"1px solid"}
                borderColor="pureblack"
                color={"pureblack"}
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing={"0.267px"}
                rounded="none"
                py="10px"
                px="45px"
            >
                Leer Más
            </Button>
        </Flex>
    )
}

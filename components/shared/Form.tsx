import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";

export default function Form() {
    return (
        <Flex
            direction="column"
        >
            <Flex
                gap="20px"
            >
                <Input
                    placeholder="Nombre"
                    border="none"
                    fontFamily="inherit"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#CCCCCF"
                    py="14px"
                    px="10px"
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#CCCCCF"
                    }}
                />

                <Input
                    placeholder="Apellido"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#CCCCCF"
                    py="14px"
                    px="10px"
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#CCCCCF"
                    }}
                />
            </Flex>

            <Flex
                gap="20px"
                mt="20px"
            >
                <Input
                    placeholder="Email"
                    border="none"
                    type="email"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#CCCCCF"
                    py="14px"
                    px="10px"
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#CCCCCF"
                    }}
                />

                <Input
                    placeholder="Teléfono"
                    type="number"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#CCCCCF"
                    py="14px"
                    px="10px"
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#CCCCCF"
                    }}
                />
            </Flex>

            <Checkbox
                mt="20px"
            >
                Consiento el uso de mis datos para los fines indicados en la política de privacidad “SUS DATOS SEGUROS”.
            </Checkbox>

            <Checkbox
                mt="5px"
            >
                Consiento el uso de mis datos personales para recibir publicidad de su entidad.
            </Checkbox>

            <Text
                mt="10px"
                color="secondary_font"
                fontSize="12px"
                fontWeight="400"
                lineHeight="16.9px"
            >
                *Lee nuestra política de privacidad.
            </Text>

            <Button
                mt="50px"
                w="fit-content"
                h="fit-content"
                py="15px"
                px="40px"
                bg="inherit"
                border={"1px solid"}
                borderColor={"#DDD"}
                rounded={0}
                color={"black"}
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                textTransform={"uppercase"}
            >
                Enviar
            </Button>
        </Flex>
    )
}

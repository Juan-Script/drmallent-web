"use client"

import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Formulario enviado con éxito');
                setFormData({ nombre: '', apellido: '', email: '', telefono: '' });
            } else {
                console.error(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error al enviar el formulario', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex
                direction="column"
            >
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    gap="20px"
                >
                    <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        width={{ base: "100%", sm: "50%" }}
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
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        width={{ base: "100%", sm: "50%" }}
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
                    direction={{ base: "column", sm: "row" }}
                    gap="20px"
                    mt="20px"
                >
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        type="email"
                        width={{ base: "100%", sm: "50%" }}
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

                    <Input
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        type="number"
                        width={{ base: "100%", sm: "50%" }}
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
                    type="submit"
                >
                    Enviar
                </Button>
            </Flex>
        </form>
    )
}

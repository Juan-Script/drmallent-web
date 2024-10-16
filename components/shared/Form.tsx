"use client"

import { Button, Checkbox, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { z } from "zod";

export default function Form() {
    const toast = useToast();

    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
        consentimientoDatos: boolean;
        consentimientoPublicidad: boolean;
    }>({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        consentimientoDatos: false,
        consentimientoPublicidad: false
    });

    const [errors, setErrors] = useState<string[]>([]);

    const formSchema = z.object({
        nombre: z.string().min(1, "El nombre es obligatorio."),
        apellido: z.string().min(1, "El apellido es obligatorio."),
        email: z.string().email("El email debe ser válido.").min(1, "El email es obligatorio."),
        telefono: z.string().min(9, "El teléfono debe ser válido.").min(1, "El teléfono es obligatorio."),
        consentimientoDatos: z.boolean().refine(val => val === true, "Debes aceptar el uso de tus datos."),
        consentimientoPublicidad: z.boolean().refine(val => val === true, "Debes aceptar recibir publicidad")
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true)
            formSchema.parse(formData);
            setErrors([]);

            try {
                const [clinica, cliente] = await Promise.all([
                    fetch('/api/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }),
                    fetch('/api/cliente', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: formData.email }),
                    })
                ]);

                const response = await clinica.json();

                if (clinica.ok) {
                    toast({
                        title: 'Formulario enviado.',
                        description: "Nos pondremos en contacto.",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: "top"
                    });

                    setFormData({
                        nombre: "",
                        apellido: "",
                        email: "",
                        telefono: "",
                        consentimientoDatos: false,
                        consentimientoPublicidad: false
                    });
                } else {
                    console.error(`Error: ${response.error}`);
                    setErrors([`Error al enviar el formulario: ${response.error}`]);
                }

                if (!cliente.ok) {
                    console.error('Error al enviar el correo secundario');
                }
            } catch (error) {
                console.error('Error al enviar el formulario', error);
                setErrors(['Error al enviar el formulario. Por favor, inténtalo de nuevo.']);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(error.errors.map(err => err.message));
            }
        } finally {
            setLoading(false)
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
                    name="consentimientoDatos"
                    alignItems="start"
                    isChecked={formData.consentimientoDatos}
                    onChange={handleChange}
                >
                    <Text
                        color="secondary_font"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.9px"
                    >
                        Consiento el uso de mis datos para los fines indicados en la política de privacidad &quot;SUS DATOS SEGUROS&quot;.
                    </Text>
                </Checkbox>

                <Checkbox
                    mt="5px"
                    name="consentimientoPublicidad"
                    alignItems="start"
                    isChecked={formData.consentimientoPublicidad}
                    onChange={handleChange}
                >
                    <Text
                        color="secondary_font"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.9px"
                    >
                        Consiento el uso de mis datos personales para recibir publicidad de su entidad.
                    </Text>
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

                <Flex
                    direction="column"
                    mt="10px"
                >
                    {errors.length > 0 &&
                        errors?.map((e: string, i: number) => (
                            <Text
                                key={i}
                                color="red"
                                fontSize="12px"
                            >
                                * {e}
                            </Text>
                        ))}
                </Flex>

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
                    isLoading={loading}
                >
                    Enviar
                </Button>
            </Flex>
        </form>
    )
}

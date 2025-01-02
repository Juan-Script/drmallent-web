"use client"

import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Definimos los motion components
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function ContentPerfil() {
    return (
        <MotionFlex
            px={{ base: "0px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            direction="column"
            gap={{ base: "50px", md: "100px" }}
            w="full"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 } },
            }}
        >
            {/* Sección de imagen y texto */}
            <MotionFlex
                direction={{ base: "column", md: "row" }}
                gap={{ base: "40px", md: "80px" }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
                }}
            >
                {/* Imagen con animación */}
                <MotionFlex
                    h={{ base: "350px", sm: "367px" }}
                    w={{ base: "100%", md: "50%", lg: "622px" }}
                    position="relative"
                    variants={{
                        hidden: { opacity: 0, scale: 1 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
                    }}
                >
                    <Image
                        src="/img/FotoPepe2.jpg"
                        alt="imgDrMallent"
                        fill
                        objectFit="cover"
                    />
                </MotionFlex>

                {/* Texto con animación desde la derecha */}
                <MotionFlex
                    px={{ base: "30px"}}
                    direction="column"
                    justifyContent="space-between"
                    gap="20px"
                    maxW={{ base: "100%", md: "50%", lg: "450px" }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
                    }}
                >
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="400">
                        El Dr. José Mallent es una reconocida autoridad en la especialidad de Cirugía Plástica, Estética y Reparadora.
                        Su manera de entender la cirugía como una profesión que debe poner en valor los conceptos de armonía, equilibrio y naturalidad,
                        y una técnica innovadora y dedicada al estudio de los últimos avances científicos, lo han consagrado como uno de los cirujanos más relevantes.
                        El cirujano plástico de Valencia más recomendado con magníficas opiniones, no solamente en la ciudad, sino de muchos pacientes que llegan a su clínica también de otras localidades.
                        <br /><br />
                        Para cualquier tratamiento de cirugía plástica y estética en Valencia, es posible solicitar una cita previa para consultar toda la información respecto a las intervenciones,
                        tratamientos, precios o modalidades de pago.
                    </Text>
                    <Link
                        href="/contacto"
                        style={{ textDecoration: "none" }}
                    >
                        <MotionButton
                            bgColor="transparent"
                            color="font"
                            border="1px"
                            borderColor="font"
                            px={{ base: "40px", md: "80px" }}
                            py="18px"
                            maxW={{ base: "100%", sm: "350px" }}
                            rounded="none"
                            fontWeight="500"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                            }}
                        >
                            Más información
                        </MotionButton>
                    </Link>
                </MotionFlex>
            </MotionFlex>

            {/* Segunda sección con dos columnas de texto */}
            <MotionFlex
                px={{ base: "30px"}}
                w="full"
                direction={{ base: "column", md: "row" }}
                gap={{ base: "40px", md: "80px" }}
                py={{ base: "50px", md: "100px", lg: "150px" }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.4 } },
                }}
            >
                {/* Primera columna (Entre ciencia y arte) */}
                <MotionFlex
                    direction="column"
                    gap="30px"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
                    }}
                >
                    <Text fontSize={{ base: "18px", md: "21px" }} fontWeight="600">
                        ENTRE CIENCIA Y ARTE. UNA FIRMA QUE HUYE DE LOS CÁNONES
                    </Text>
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="400" color="secondary_font">
                        Hablar del Dr. José Mallent es hablar de una filosofía de vida marcada por el gusto por la belleza,
                        la proporción y el arte… un sutil equilibrio que refleja con prestigio en el ejercicio de su profesión,
                        desde hace más de 20 años.<br /><br />
                        “Es más difícil obtener un resultado natural que un resultado visible, y esto es técnica.”<br /><br />
                        Porque ser cirujano plástico no significa solo operar, sino acompañar, informar con lealtad y compartir emociones…
                        Alcanzar las expectativas de sus pacientes requiere responsabilidad, experiencia y sensibilidad,
                        así como un perfecto dominio de las técnicas más innovadoras en cirugía estética y reparadora.<br /><br />
                        El Dr. José Mallent tiene una visión moderna de la cirugía plástica, un sentido de la estética marcado por un resultado único,
                        natural y elegante, adaptado a los deseos pero también a las necesidades de sus pacientes.
                        Una firma que huye de los cánones impuestos para potenciar la belleza individual y aumentar la confianza en uno mismo.
                    </Text>
                </MotionFlex>

                {/* Segunda columna (Pasado, presente y futuro) */}
                <MotionFlex
                    direction="column"
                    gap="30px"
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
                    }}
                >
                    <Text fontSize={{ base: "18px", md: "21px" }} fontWeight="600">
                        PASADO, PRESENTE Y FUTURO: UNA SAGA FAMILIAR
                    </Text>
                    <Text fontSize={{ base: "12px", md: "14px" }} fontWeight="400" color="secondary_font">
                        ¿La vocación por ser cirujano se puede heredar? ¿El gusto por la búsqueda de la belleza puede pasar de una generación a otra?
                        <br /><br />
                        Sin duda, podemos contestar afirmativamente a estas dos preguntas en el caso de la familia del Dr. José Mallent, toda una saga unida por la ciencia y el arte…
                        <br /><br />
                        Son ya dos generaciones de cirujanos plásticos y la tercera en vías de formación… La historia empieza casi en el mismo momento en que la cirugía plástica irrumpe en Valencia,
                        a principios de los años sesenta, cuando el Dr. Mallent padre, gran aficionado al arte, se inicia en esta especialidad y, muy concretamente, en el tratamiento de los quemados.
                        <br /><br />
                        Este testigo científico y artístico es recogido por el Dr. José Mallent, cuyo vínculo con la medicina y el arte se inicia desde muy temprano.
                        La historia se repite, y una tercera generación irrumpe con ilusión absorbiendo la experiencia médica familiar en la persona de Pilar Mallent,
                        garantizando la continuidad de la cirugía estética como la unión entre la ciencia y el arte.
                    </Text>
                </MotionFlex>
            </MotionFlex>
        </MotionFlex>
    );
}

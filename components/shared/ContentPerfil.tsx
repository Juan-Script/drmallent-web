import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function ContentPerfil() {
    return (
        <Flex
            px={{ "2xl": "300px", xl: "200px", lg: "200px" }}
            direction="column"
            gap="100px"
        >
            <Flex
                gap="80px"
            >
                <Image
                    src="/imgDrMallent.png"
                    alt='imgDrMallent'
                    width={600}
                    height={360}
                />

                <Flex
                    direction="column"
                    justifyContent="space-between"
                    gap="20px"
                >
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                    >
                        El Dr. José Mallent es una reconocida autoridad en la especialidad de Cirugía Plástica, Estética y Reparadora.
                        Su manera de entender la cirugía como una profesión que debe poner en valor los conceptos de armonía, equilibrio y naturalidad, y una técnica innovadora y dedicada al estudio de los últimos avances
                        científicos, lo han consagrado como uno de los cirujanos más relevantes. El cirujano plástico de Valencia más recomendado con magníficas opiniones, no solamente en la ciudad, sino de muchos pacientes
                        que llegan a su clínica también de otras localidades.

                        Para cualquier tratamiento de cirugía plástica y estética en Valencia, es posible solicitar una cita previa para consultar toda la información respecto a las intervenciones, tratamientos, precios o modalidades de
                        pago.
                    </Text>

                    <Button
                        bgColor="transparent"
                        color="font"
                        border="1px"
                        borderColor="font"
                        px="80px"
                        py="18px"
                        maxW="350px"
                        rounded="none"
                    >
                        Más información
                    </Button>
                </Flex>
            </Flex>

            <Flex
                w="full"
                gap="80px"
                py="150px"
            >
                <Flex
                    direction="column"
                    gap="30px"
                >
                    <Text
                        fontSize="21px"
                        fontWeight="600"
                    >
                        ENTRE CIENCIA Y ARTE.
                        UNA FIRMA QUE HUYE DE LOS CÁNONES
                    </Text>
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="secondary_font"
                    >
                        Hablar del Dr. José Mallent es hablar de una filosofía de vida marcada por el gusto por la belleza, la
                        proporción y el arte… un sutil equilibrio que refleja con prestigio en el ejercicio de su profesión,
                        desde hace más de 20 años.<br />

                        “Es más difícil obtener un resultado natural que un resultado visible, y esto es técnica.”<br />

                        Porque ser cirujano plástico no significa solo operar, sino acompañar, informar con lealtad y
                        compartir emociones… Alcanzar las expectativas de sus pacientes requiere responsabilidad,
                        experiencia y sensibilidad, así como un perfecto dominio de las técnicas más innovadoras en
                        cirugía estética y reparadora.<br />

                        El Dr. José Mallent tiene una visión moderna de la cirugía plástica, un sentido de la estética
                        marcado por un resultado único, natural y elegante, adaptado a los deseos pero también a las
                        necesidades de sus pacientes. Una firma que huye de los cánones impuestos para potenciar la
                        belleza individual y aumentar la confianza en uno mismo.<br />
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    gap="30px"
                >
                    <Text
                        fontSize="21px"
                        fontWeight="600"
                    >
                        PASADO, PRESENTE Y FUTURO:
                        UNA SAGA FAMILIAR
                    </Text>
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="secondary_font"
                    >
                        ¿La vocación por ser cirujano se puede heredar? ¿El gusto por la búsqueda de la belleza puede
                        pasar de una generación a otra?
                        <br />
                        Sin duda, podemos contestar afirmativamente a estas dos preguntas en el caso de la familia del
                        Dr. José Mallent, toda una saga unida por la ciencia y el arte…
                        <br />
                        Son ya dos generaciones de cirujanos plásticos y la tercera en vías de formación… La historia
                        empieza casi en el mismo momento en que la cirugía plástica irrumpe en Valencia, a principios de
                        los años sesenta, cuando el Dr. Mallent padre, gran aficionado al arte, se inicia en esta
                        especialidad y, muy concretamente, en el tratamiento de los quemados.
                        <br />
                        Este testigo científico y artístico es recogido por el Dr. José Mallent , cuyo vinculo con la medicina
                        y el arte se inicia desde muy temprano. La historia se repite, y una tercera generación irrumpe con
                        ilusión absorbiendo la experiencia médica familiar en la persona de Pilar Mallent, garantizando la
                        continuidad de la cirugía estética como la unión entre la ciencia y el arte.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

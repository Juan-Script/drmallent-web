import { Flex, Text } from '@chakra-ui/react'
import Form from './Form'

export default function ContactHome() {
  return (
    <Flex
      bgColor="white"
      px={{ "2xl": "300px", xl: "200px", lg: "200px" }}
      justifyContent="center"
      direction="column"
      py="100px"
      gap="10px"
      mx="auto"
    >
      <Text
        fontSize="23px"
        transform="uppercase"
        mr="auto"
      >
        Solicite una consulta
      </Text>
      <Flex
        gap="60px"
        align="center"
      >
        <Flex
          w="50%"
          direction="column"
          gap="30px"
        >
          <Text
            fontSize="12px"
          >
            Solicite una consulta y nos pondremos en contacto con usted
          </Text>
          <Form />
        </Flex>

        <Flex
          w="50%"
        >
          <Text
            fontSize="16px"
            mb="80px"
          >
            En la Clínica Dr. Mallent solo queremos lo mejor para nuestros
            pacientes, por eso realizamos una consulta previa a cualquier
            tratamiento. Un diagnostico estético personalizado elaborado por
            un cirujano referente y reconocido en Cirugía Plástica y
            Reparadora.
          </Text>
        </Flex>

      </Flex>
    </Flex>
  )
}

import { Flex, Text } from '@chakra-ui/react'
import Form from './Form'

export default function ContactHome() {
  return (
    <Flex
      bgColor="white"
      px={{ xl: "300px", lg: "200px" }}
      alignItems="start"
      justifyContent="center"
      direction="column"
      py="100px"
      gap=""
    >
      <Text
        fontSize="23px"
        transform="uppercase"
      >
        Solicite una consulta
      </Text>
      <Flex
        gap="60px"
        align="center"
      >
        <Form />
        <Text
          fontSize="16px"
          maxW="550px"
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
  )
}

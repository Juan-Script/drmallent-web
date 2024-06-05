import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Testimonials() {

  const testimonios = [
    {
      text: "La experiencia en esta clínica ha sido excepcional. Desde la consulta inicial hasta el seguimiento postoperatorio, el equipo ha sido profesional y atento.",
      person: "María López",
      img: "/testimonio1.png"
    },
    {
      text: "Decidí realizarme una rinoplastia en esta clínica y no podría estar más contento con mi decisión. Los doctores son muy experimentados y se aseguraron de que entendiera cada paso del proceso.",
      person: "Carlos Fernández",
      img: "/testimonio2.png"
    },
    {
      text: "Recomiendo esta clínica a cualquiera que esté considerando una cirugía estética. El personal es increíblemente amable y profesional, y el ambiente es acogedor.",
      person: "Ana Martínez",
      img: "/testimonio3.png"
    }
  ]

  return (
    <Flex
      px={{ xl: "300px", lg: "200px" }}
      py="100px"
      gap="40px"
    >
      {
        testimonios.map((testimonio, index) => (
          <Flex
            key={index}
            direction="column"
            gap="20px"
          >
            <Text
              fontSize="18px"
              fontStyle="italic"
            >
              {testimonio.text}
            </Text>
            <Flex
              gap="20px"
              align="center"
            >
              <Image
                src={testimonio.img}
                alt={testimonio.person}
                width={50}
                height={50}
              />
              <Text
                fontSize="18px"
              >
                {testimonio.person}
              </Text>
            </Flex>

          </Flex>
        ))
      }
    </Flex>
  )
}

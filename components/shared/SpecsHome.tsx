import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecsHome() {
  const specs = [
    {
      number: "01.",
      titulo: "Cirugía plástica",
      text: "Procedimientos quirúrgicos especializados para remodelar y mejorar la forma y función de diferentes áreas del cuerpo. Nuestros cirujanos expertos combinan técnicas avanzadas con un enfoque personalizado para lograr resultados naturales y armoniosos.",
      href: "/cirugia-plastica/rinoplastia"
    },
    {
      number: "02.",
      titulo: "Medicina estética",
      text: "Tratamientos no quirúrgicos y mínimamente invasivos para realzar tu belleza natural. Ofrecemos las últimas tecnologías y procedimientos para el rejuvenecimiento facial, cuidado de la piel y mejoras estéticas, con resultados visibles y tiempo mínimo de recuperación.",
      href: "/medicina-estetica/rellenos"
    },
  ]
  return (
    <Flex
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      py={{ base: "50px", md: "100px" }}
      direction="column"
      gap={{ base: "40px", md: "70px" }}
    >
      {specs.map((spec, index) => (
        <Flex
          key={index}
          w="full"
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap="50px"
        >
          <Text
            fontSize={{ base: "24px", sm: "32px", md: "40px" }}
            fontWeight={700}
            w={{ base: "full", md: "auto" }}
            mb={{ base: "10px", md: "0" }}
          >
            {spec.number} {spec.titulo}
          </Text>

          <Flex
            maxW="500px"
            direction="column"
            gap="20px"
          >
            <Text
              fontSize={{ base: "14px", sm: "16px" }}
              fontWeight={400}
              color="secondary_font"
            >
              {spec.text}
            </Text>

            <Link
              href={spec.href}
            >
              <Flex
                gap="5px"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "14px", sm: "16px" }}
                  letterSpacing={4}
                  fontWeight={600}
                >
                  VER MÁS
                </Text>

                <Image
                  src="/rightArrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </Flex>
            </Link>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

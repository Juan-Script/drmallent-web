import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecsHome() {
  const specs = [
    {
      number: "01.",
      titulo: "Cirugía plástica",
      text: "Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.",
      href: "/cirugia-plastica"
    },
    {
      number: "02.",
      titulo: "Medicina estética",
      text: "Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.",
      href: "/medicina-estetica"
    },

  ]
  return (
    <Flex
      px={{ xl: "300px", lg: "200px" }}
      py="100px"
      direction="column"
      gap="70px"
    >
      {specs.map((spec, index) => (
        <Flex
          key={index}
          w="full"
          justifyContent="space-between"
        >
          <Text
            fontSize="40px"
            fontWeight={700}
          >
            {spec.number} {spec.titulo}
          </Text>

          <Flex
            maxW="700px"
            direction="column"
            gap="20px"
          >
            <Text
              fontSize="16px"
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
              >
                <Text
                  fontSize="16px"
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

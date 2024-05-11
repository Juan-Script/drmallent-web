import { Flex, Link as ChakraLink, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Facebook from "../svg/Facebook";
import Twitter from "../svg/Twitter";
import Linkedin from "../svg/Linkedin";
import Instagram from "../svg/Instagram";

interface Links {
  label: string;
  href: string;
  childrens?: { label: string; }[];
}

export default function Footer() {

  const links = [
    {
      label: "cirugía plástica",
      href: "/",
      childrens: [
        { label: "rinoplastia" },
        { label: "mentoplastia" },
        { label: "aumento de pómulos" },
        { label: "otoplastia" },
        { label: "blefaropastia" },
        { label: "estiramiento facial" },
        { label: "cirugía de mama" },
        { label: "aumento de mamas" },
        { label: "elevación mamaria" },
        { label: "reducción de mamas" },
        { label: "ginecomastia" },
        { label: "reconstrucción de mamas" },
        { label: "abdominoplastia" },
        { label: "liposucción" },
        { label: "brazos y muslos" },
        { label: "post bariátrica" },
        { label: "lipofilling" },
        { label: "injerto capilar" },
      ]
    },
    {
      label: "medicina estética",
      href: "/",
      childrens: [
        { label: "rellenos de arrugas" },
        { label: "mesoterapia facial" },
        { label: "peelings" },
        { label: "lifting con microcánulas" },
        { label: "tratamiento para quitar manchas" },
        { label: "plasma rico en plaquetas" },
      ]
    },
    {
      label: "perfil",
      href: "/",
    },
    {
      label: "equipo",
      href: "/",
    },

    {
      label: "noticias",
      href: "/",
    },
    {
      label: "contacto",
      href: "/",
    },
  ]

  const socials = [
    {
      icon: <Facebook />,
      href: "/",
    },
    {
      icon: <Twitter />,
      href: "/",
    },
    {
      icon: <Linkedin />,
      href: "/",
    },
    {
      icon: <Instagram />,
      href: "/",
    },
  ]

  return (
    <Flex
      py={{ base: "20px", lg: "135px" }}
      px={{ base: "0", lg: "318px" }}
      bg="black"
      w="100%"
      direction="column"
    >
      <Flex
        gap="50px"
      >
        {links.map((link: Links, iLinks: number) => (
          <Flex
            key={iLinks}
            direction="column"
            p="20px"
          >
            <ChakraLink
              as={Link}
              href={link?.href}
              color={"purewhite"}
              fontWeight="400"
              fontSize={{ base: "14px", md: "16px" }}
              mb="10px"
            >
              {link?.label}
            </ChakraLink>

            {link?.childrens && link?.childrens.map((children, iChildrens) => (
              <Text
                key={iChildrens}
                color={"purewhite"}
                fontWeight="400"
                fontSize={{ base: "12px", md: "14px" }}
              >
                {children?.label}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>

      <Box
        h="1px"
        bg={"black_variant"}
        w="100%"
        mt={{ base: "63px" }}
        mb={{ base: "100px" }}
      />

      <Flex
        alignItems="center"
      >
        <Flex
          gap="20px"
          h="fit-content"
          w="fit-content"
        >
          {socials.map((social, iSocial) => (
            <ChakraLink
              key={iSocial}
              as={Link}
              href={social?.href}
              rounded="full"
              fill="rgba(217, 217, 217, 0.00)"
              borderColor={"font_variant"}
              border="2px solid"
              p="11px"
            >
              {social?.icon}
            </ChakraLink>
          ))}
        </Flex>

        <Box
          w="1px"
          h="62px"
          bg={"black_variant"}
          ml={{ base: "165px" }}
        />

        <Text
          color={"purewhite"}
          fontWeight="400"
          fontSize={{ base: "14px", md: "16px" }}
          ml="auto"
          w={"45%"}
          textAlign="right"
        >
          Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc.
        </Text>
      </Flex>

      <Flex
        align="center"
        mt="200px"
        justifyContent="space-between"
      >
        <Text
          color={"purewhite"}
          fontWeight="400"
          fontSize={{ base: "14px", md: "16px" }}
        >
          © Copyright by Miso Labs – Derechos reservados.
        </Text>

        <Flex
          gap={"50px"}
          color={"font_variant"}
          fontSize={{ base: "14px", md: "16px" }}
          letterSpacing={"6.88px"}
          fontWeight={"400"}
        >
          <Text>
            TÉRMINOS
          </Text>

          <Text>
            PRIVACIDAD
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

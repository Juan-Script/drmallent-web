import { Flex, Link as ChakraLink, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Instagram from "../svg/Instagram";

interface Links {
  label: string;
  href: string;
  childrens?: { 
    label: string;
    href?: string;
  }[];
}

export default function Footer() {

  const links = [
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
    {
      label: "medicina estética",
      href: "/medicina-estetica",
      childrens: [
        { label: "rellenos", href: "/medicina-estetica/rellenos" },
        { label: "mesoterapia", href: "/medicina-estetica/mesoterapia" },
        { label: "peelings", href: "/medicina-estetica/peelings" },
        { label: "lifting con microcánulas", href: "/medicina-estetica/lifting-microcanulas" },
        { label: "tratamiento de manchas", href: "/medicina-estetica/tratamiento-manchas" },
        { label: "injerto capilar", href: "/medicina-estetica/injerto-capilar" },
      ]
    },
    {
      label: "cirugía plástica",
      href: "/cirugia-plastica",
      childrens: [
        { label: "rinoplastia", href: "/cirugia-plastica/rinoplastia" },
        { label: "mentoplastia", href: "/cirugia-plastica/mentoplastia" },
        { label: "aumento de pómulos", href: "/cirugia-plastica/pomulos" },
        { label: "otoplastia", href: "/cirugia-plastica/orejas" },
        { label: "blefaroplastia", href: "/cirugia-plastica/parpados" },
        { label: "estiramiento facial", href: "/cirugia-plastica/estiramiento-facial" },
        { label: "aumento de mamas", href: "/cirugia-plastica/aumento-mamas" },
        { label: "reconstrucción de mamas", href: "/cirugia-plastica/reconstruccion-mamas" },
        { label: "reducción de mamas", href: "/cirugia-plastica/reduccion-mamas" },
        { label: "lifting de brazos y muslos", href: "/cirugia-plastica/brazos-muslos" },
        { label: "liposucción", href: "/cirugia-plastica/liposuccion" },
        { label: "abdominoplastia", href: "/cirugia-plastica/abdominoplastia" },
        { label: "cirugía post bariátrica", href: "/cirugia-plastica/cirugia-post-bariatrica" },
      ]
    },
  ]

  const socials = [
    {
      icon: <Instagram />,
      href: "/",
    },
  ]

  return (
    <Flex
      py={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
      px={{ base: "20px", sm: "40px", md: "80px", lg: "200px", xl: "200px", "2xl": "300px" }}
      bg="black"
      w="100%"
      direction="column"
    >
      <Flex
        gap={{ base: "20px", sm: "30px", md: "40px" }}
        flexWrap="wrap"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexWrap="wrap"
          gap={{ base: "20px", sm: "30px", md: "40px" }}
          justifyContent={{ base: "flex-start", md: "center" }}
          width={{ base: "100%", md: "auto" }}
        >
          {links.slice(0, 4).map((link: Links, iLinks: number) => (
            <Flex
              key={iLinks}
              direction="column"
              p={{ base: "10px", sm: "15px", md: "20px" }}
            >
              <ChakraLink
                as={Link}
                href={link?.href}
                color={"purewhite"}
                fontWeight="400"
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                mb="10px"
              >
                {link?.label}
              </ChakraLink>
            </Flex>
          ))}
        </Flex>

        <Flex
          flexWrap="wrap"
          gap={{ base: "20px", sm: "30px", md: "40px" }}
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          width={{ base: "100%", md: "auto" }}
          mt={{ base: "20px", md: "0" }}
        >
          {links.slice(4).map((link: Links, iLinks: number) => (
            <Flex
              key={iLinks + 4}
              direction="column"
              p={{ base: "10px", sm: "15px", md: "20px" }}
            >
              <ChakraLink
                as={Link}
                href={link?.href}
                color={"purewhite"}
                fontWeight="400"
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                mb="10px"
              >
                {link?.label}
              </ChakraLink>

              {link?.childrens && link?.childrens.map((children, iChildrens) => (
                <ChakraLink
                  key={iChildrens}
                  as={Link}
                  href={children?.href || "#"}
                  color={"purewhite"}
                  fontWeight="400"
                  fontSize={{ base: "12px", sm: "13px", md: "14px" }}
                >
                  {children?.label}
                </ChakraLink>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Box
        h="1px"
        bg={"black_variant"}
        w="100%"
        mt={{ base: "30px", sm: "40px", md: "50px", lg: "63px" }}
        mb={{ base: "50px", sm: "70px", md: "85px", lg: "100px" }}
      />

      <Flex
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "30px", md: "0" }}
      >
        <Flex
          gap={{ base: "15px", sm: "20px" }}
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
              p={{ base: "8px", sm: "10px", md: "11px" }}
            >
              {social?.icon}
            </ChakraLink>
          ))}
        </Flex>

        <Box
          w={{ base: "100%", md: "1px" }}
          h={{ base: "1px", md: "62px" }}
          bg={"black_variant"}
          my={{ base: "20px", md: "0" }}
          mx={{ base: "0", md: "30px", lg: "165px" }}
        />

        <Text
          color={"purewhite"}
          fontWeight="400"
          fontSize={{ base: "14px", sm: "15px", md: "16px" }}
          textAlign={{ base: "center", md: "right" }}
          w={{ base: "100%", md: "100%" }}
        >
          info@drmallent.com
          <br/> +34 646 66 78 00
          <br/>Calle de Sorní, 4 <br/>
          Valencia, 46004
        </Text>
      </Flex>

      <Flex
        align="center"
        mt={{ base: "100px", sm: "150px", md: "175px", lg: "200px" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0" }}
      >
        <Text
          color={"purewhite"}
          fontWeight="400"
          fontSize={{ base: "14px", sm: "15px", md: "16px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          © Copyright by Miso Labs – Derechos reservados.
        </Text>

        <Flex
          gap={{ base: "30px", sm: "40px", md: "50px" }}
          color={"font_variant"}
          fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "16px" }}
          letterSpacing={{ base: "4px", sm: "5px", md: "6px", lg: "6.88px" }}
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

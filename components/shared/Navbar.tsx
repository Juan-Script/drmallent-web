import { Button, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'

export default function Navbar() {
    const Links = [
        {
            href: '/cirugia-plastica',
            text: 'cirugia plástica'
        },
        {
            href: '/medicina-estetica',
            text: 'medicina estética'
        },
        {
            href: '/perfil',
            text: 'perfil'
        },
    ]
    return (
        <Flex
            justifyContent="space-between"
            textColor="white"
            pos="fixed"
            top="0"
            w="100%"
            p="4"
            px="50px"
            bg="transparent"
            zIndex="10"
        >
            <Link
                href='/'
            >
                <Image
                    src="/DRJMlogo.svg"
                    alt="Logo"
                    width={96}
                    height={19}
                />
            </Link>

            <Flex
                gap="40px"
            >
                {
                    Links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                        >
                            {link.text}
                        </Link>
                    ))
                }
            </Flex>

            <Button
                border="1px"
                borderColor="white"
                bg="transparent"
                textColor="white"
                fontWeight={300}
                rounded={0}
            >
                Contacto
            </Button>

        </Flex>
    )
}

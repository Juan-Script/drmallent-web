"use client"

import { Button, Flex, Link } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react';

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
        {
            href: '/especialistas',
            text: 'equipo'
        },
    ]

    const [isScrolled, setIsScrolled] = useState(false);
    const location = usePathname();
    const isHome = location === '/';

    useEffect(() => {
        const detectScrolling = () => {
            if (window.scrollY > 3) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', detectScrolling);

        detectScrolling();

        return () => {
            window.removeEventListener('scroll', detectScrolling);
        };
    }, []);

    return (
        <Flex
            justifyContent="space-between"
            textColor={isHome ? (isScrolled ? "black" : "white") : "black"}
            pos="fixed"
            top="0"
            w="100%"
            p="4"
            px="50px"
            bg={isScrolled ? "white" : "transparent"}
            zIndex="10"
            align="center"
        >
            <Link
                href='/'
            >
                <Image
                    src={isHome ? (isScrolled ? "/DRJMlogoBlack.svg" : "/DRJMlogo.svg") : "/DRJMlogoBlack.svg"}
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

            <Link
                href="/contacto"
            >
                <Button
                    border="1px"
                    borderColor={isHome ? (isScrolled ? "black" : "white") : "black"}
                    bg="transparent"
                    textColor={isHome ? (isScrolled ? "black" : "white") : "black"}
                    fontWeight={300}
                    rounded={0}
                >
                    Contacto
                </Button>
            </Link>

        </Flex>
    )
}

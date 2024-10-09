"use client"

import { Button, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MenuDrawer } from './MenuDrawer';


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
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            textColor="black"
            pos="fixed"
            top="0"
            w="100%"
            p="4"
            px={{ base: "20px", md: "50px" }}
            bg={isScrolled ? "white" : "transparent"}
            zIndex="10"
            align="center"
        >
            <Link
                href='/'
            >
                <Image
                    src={"/DRJMlogoBlack.svg"}
                    alt="Logo"
                    width={96}
                    height={19}
                />
            </Link>

            <Flex
                gap="40px"
                display={{ base: "none", md: "flex" }}
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

            {/* Botón de contacto para pantallas grandes */}
            <Link
                href="/contacto"
                display={{ base: "none", md: "block" }}
            >
                <Button
                    border="1px"
                    borderColor="black"
                    bg="transparent"
                    textColor="black"
                    fontWeight={300}
                    rounded={0}
                >
                    Contacto
                </Button>
            </Link>

            <IconButton
                aria-label="Abrir menú"
                icon={<IoMenu />}
                onClick={onOpen}
                display={{ base: "flex", md: "none" }}
                bg="transparent"
                color={isHome ? (isScrolled ? "black" : "white") : "black"}
            />

            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                Links={Links}
            />
        </Flex>
    )
}

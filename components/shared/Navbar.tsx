"use client";

import { Button, Flex, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Link as ChakraLink, Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MenuDrawer } from './MenuDrawer';
import Link from 'next/link';

export default function Navbar() {
    const Links = [
        {
            href: '/cirugia-plastica',
            text: 'cirugía plástica'
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
    ];

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
            {/* Logo */}
            <ChakraLink as={Link} href='/'>
                <Image
                    src={"/DRJMlogoBlack.svg"}
                    alt="Logo"
                    width={96}
                    height={19}
                />
            </ChakraLink>

            <Flex gap="40px" display={{ base: "none", md: "flex" }} position="relative">
                {Links.map((link, index) => (
                    (link.href === '/cirugia-plastica' || link.href === '/medicina-estetica') ? (
                        <Box 
                            key={index} 
                            position="relative" 
                            _hover={{ '.dropdown': { visibility: 'visible', opacity: 1, maxHeight: '500px' } }} // Actualizamos con la animación
                        >
                            <ChakraLink
                                as={Link}
                                href={link.href}
                                fontSize="14px"
                                _hover={{ color: "#878787" }}
                            >
                                {link.text}
                            </ChakraLink>

                            <Box
                                className="dropdown"
                                position="absolute"
                                bg="white"
                                border="1px solid #ddd"
                                p="20px"
                                shadow="lg"
                                visibility="hidden"
                                opacity={0}
                                minWidth="200px"
                                zIndex="10"
                                fontSize="12px"
                                transition="all 0.4s ease"
                                transform="translateY(0)"
                                maxHeight="0"
                                overflow="hidden"
                                mt="10px"
                            >
                                {link.href === '/cirugia-plastica' && (
                                    <>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Rinoplastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Mentoplastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Pómulos</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Orejas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Párpados</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Estiramiento facial</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Aumento de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Reconstrucción de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Reducción de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Lipofilling</Box>
                                    </>
                                )}
                                {link.href === '/medicina-estetica' && (
                                    <>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Brazos y muslos</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Liposucción</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Injerto capilar</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Abdominoplastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Cirugía post bariátrica</Box>
                                    </>
                                )}
                            </Box>
                        </Box>
                    ) : (
                        <ChakraLink
                            as={Link}
                            key={index}
                            href={link.href}
                            fontSize="14px"
                            _hover={{ color: "#878787" }}
                        >
                            {link.text}
                        </ChakraLink>
                    )
                ))}
            </Flex>

            <ChakraLink as={Link} href="/contacto" display={{ base: "none", md: "block" }}>
                <Button
                    border="1px"
                    borderColor="black"
                    bg="transparent"
                    textColor="black"
                    fontWeight={300}
                    rounded={0}
                    fontSize="14px"
                >
                    Contacto
                </Button>
            </ChakraLink>

            <IconButton
                aria-label="Abrir menú"
                icon={<IoMenu />}
                onClick={onOpen}
                display={{ base: "flex", md: "none" }}
                bg="transparent"
                color="black"
            />

            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                Links={Links}
            />
        </Flex>
    );
}

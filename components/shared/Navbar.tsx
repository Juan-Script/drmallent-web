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
                    (link.href === '/cirugia-plastica' || link.href === '/medicina-estetica' || link.href === '/especialistas') ? (
                        <Box
                            key={index}
                            position="relative"
                            _hover={{ '.dropdown': { visibility: 'visible', opacity: 1, maxHeight: '500px' } }}
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
                                zIndex="10"
                                w={link.href === '/cirugia-plastica' ? "900px" : "300px"}
                                fontSize="12px"
                                transition="all 0.4s ease"
                                transform="translateY(0)"
                                overflow="visible"
                                mt="10px"
                                display="grid"
                                gridTemplateColumns={link.href === '/cirugia-plastica' ? "repeat(3, minmax(0, 1fr))" : "repeat(1, minmax(0, 1fr))"}
                                gap="5px"
                            >
                                {link.href === '/cirugia-plastica' && (
                                    <>
                                        <Box fontWeight="bold">CIRUGÍA MAMARIA</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Aumento de mamas. Prótesis. Injertos de grasa</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Reducción de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Elevación de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Reconstrucción de mamas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Cirugía de mamas en el varón. Ginecomastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Cirugía de reasignación de género</Box>

                                        <Box fontWeight="bold" mt="10px">CIRUGÍA CONTORNO CORPORAL</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Abdominoplastia. Tummy Tuck</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Brazos (braquioplastia). Muslos (cruroplastia)</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Liposucción. Lipedema</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Gluteoplastia</Box>

                                        <Box fontWeight="bold" mt="10px">CIRUGÍA FACIAL</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Blefaroplastia (superior e inferior)</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Otoplastia. Orejas en soplillo. Lóbulos rasgados.</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Rinoplastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Mentoplastia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Lifting cervicofacial</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Bichectomía</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Cirugía de labios. Lip lift</Box>

                                        <Box fontWeight="bold" mt="10px">CIRUGÍA GENITAL</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Ninfoplastia</Box>

                                        <Box fontWeight="bold" mt="10px">CIRUGÍA RECONSTRUCTIVA</Box>

                                        <Box fontWeight="bold" mt="10px">CIRUGÍA DE LA PIEL</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Extirpación de lesiones cutáneas</Box>
                                    </>
                                )}
                                {link.href === '/medicina-estetica' && (
                                    <>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Rellenos</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Injerto Capilar</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Mesoterapia</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Peelings</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Lifting Microcánulas</Box>
                                        <Box as="a" href="#" display="block" p="5px" _hover={{ color: "#878787" }}>Tratamiento para quitar manchas</Box>
                                    </>
                                )}
                                {link.href === '/especialistas' && (
                                    <>
                                        <Box as="a" href="/especialistas" display="block" p="5px" _hover={{ color: "#878787" }}>Equipo</Box>
                                        <Box as="a" href="/instalaciones" display="block" p="5px" _hover={{ color: "#878787" }}>Instalaciones</Box>
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

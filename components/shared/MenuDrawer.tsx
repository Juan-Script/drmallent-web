import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, Box, Collapse, Text, Flex, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { IoChevronDown } from "react-icons/io5";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    Links: {
        href: string;
        text: string;
    }[];
}

export const MenuDrawer = ({ isOpen, onClose, Links }: Props) => {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const toggleMenu = (href: string) => {
        setExpandedMenu(expandedMenu === href ? null : href);
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent bg="white">
                <DrawerCloseButton color="black" />
                <DrawerHeader color="black">Menú</DrawerHeader>
                <DrawerBody>
                    <VStack
                        spacing={4}
                        align="stretch"
                    >
                        {Links.map((link, index) => (
                            <Box key={index}>
                                {(link.href === '/cirugia-plastica' || link.href === '/medicina-estetica' || link.text.toLowerCase() === 'equipo') ? (
                                    <>
                                        <Flex
                                            cursor="pointer"
                                            onClick={() => toggleMenu(link.href)}
                                            pb={2}
                                            align="center"
                                            justify="space-between"
                                        >
                                            <Text color="black" fontWeight="medium">
                                                {link.text}
                                            </Text>
                                            <Icon
                                                as={IoChevronDown}
                                                color="black"
                                                transform={expandedMenu === link.href ? "rotate(180deg)" : "rotate(0deg)"}
                                                transition="all 0.2s"
                                                w={5}
                                                h={5}
                                            />
                                        </Flex>
                                        <Collapse in={expandedMenu === link.href}>
                                            <VStack align="stretch" pl={4} spacing={2}>
                                                {link.href === '/cirugia-plastica' && (
                                                    <>
                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt="15px">CIRUGÍA MAMARIA</Text>
                                                        <Link href="/cirugia-plastica/aumento-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Aumento de mamas</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/reduccion-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Reducción de mamas</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/elevacion-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Elevación de mamas</Text>
                                                        </Link>
                                                        
                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA FACIAL</Text>
                                                        <Link href="/cirugia-plastica/rinoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Rinoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/blefaroplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Blefaroplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/lifting-facial" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Lifting facial</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/otoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Otoplastia</Text>
                                                        </Link>

                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA CORPORAL</Text>
                                                        <Link href="/cirugia-plastica/abdominoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Abdominoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/liposuccion" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Liposucción</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/gluteoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Gluteoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/braquioplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Braquioplastia</Text>
                                                        </Link>
                                                    </>
                                                )}
                                                {link.href === '/medicina-estetica' && (
                                                    <>
                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt="15px">TRATAMIENTOS FACIALES</Text>
                                                        <Link href="/medicina-estetica/botox" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Botox</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/rellenos" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Rellenos faciales</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/hilos-tensores" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Hilos tensores</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/peeling" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Peeling</Text>
                                                        </Link>

                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>TRATAMIENTOS CORPORALES</Text>
                                                        <Link href="/medicina-estetica/mesoterapia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Mesoterapia</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/hidrolipoclasia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Hidrolipoclasia</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/carboxiterapia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Carboxiterapia</Text>
                                                        </Link>

                                                        <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>OTROS TRATAMIENTOS</Text>
                                                        <Link href="/medicina-estetica/injerto-capilar" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Injerto Capilar</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/depilacion-laser" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Depilación Láser</Text>
                                                        </Link>
                                                    </>
                                                )}
                                                {link.text.toLowerCase() === 'equipo' && (
                                                    <Flex
                                                        my="10px"
                                                        direction="column"
                                                        gap="10px"
                                                    >
                                                        <Link href="/especialistas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Equipo</Text>
                                                        </Link>
                                                        <Link href="/instalaciones" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Instalaciones</Text>
                                                        </Link>
                                                    </Flex>
                                                )}
                                            </VStack>
                                        </Collapse>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                    >
                                        <Text color="black" mt="-6px">{link.text}</Text>
                                    </Link>
                                )}
                            </Box>
                        ))}
                        <Link
                            href="/contacto"
                            onClick={onClose}
                        >
                            <Button
                                w="100%"
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
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
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
                                        <Flex align="center">
                                            {(link.href === '/cirugia-plastica' || link.href === '/medicina-estetica') ? (
                                                <Text
                                                    color="black"
                                                    fontWeight="medium"
                                                    flex={1}
                                                    cursor="pointer"
                                                    onClick={() => toggleMenu(link.href)}
                                                >
                                                    {link.text}
                                                </Text>
                                            ) : (
                                                <Link href={link.href} onClick={onClose} style={{ flex: 1 }}>
                                                    <Text color="black" fontWeight="medium">
                                                        {link.text}
                                                    </Text>
                                                </Link>
                                            )}
                                            <Box
                                                onClick={() => toggleMenu(link.href)}
                                                cursor="pointer"
                                                p={2}
                                            >
                                                <Icon
                                                    as={IoChevronDown}
                                                    color="black"
                                                    transform={expandedMenu === link.href ? "rotate(180deg)" : "rotate(0deg)"}
                                                    transition="all 0.2s"
                                                    w={5}
                                                    h={5}
                                                />
                                            </Box>
                                        </Flex>
                                        <Collapse in={expandedMenu === link.href}>
                                            <VStack align="stretch" pl={4} spacing={2}>
                                                {link.href === '/cirugia-plastica' && (
                                                    <>
                                                        <Link href="/cirugia-plastica/cirugia-mamaria">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt="15px">CIRUGÍA MAMARIA</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/aumento-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Aumento de mamas. Prótesis. Injertos de grasa</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/reduccion-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Reducción de mamas</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/elevacion-mamas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Elevación de mamas</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/reconstruccion-mama" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Reconstrucción de mamas</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/ginecomastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Cirugía de mamas en el varón. Ginecomastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/reasignacion-genero" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Cirugía de reasignación de género</Text>
                                                        </Link>

                                                        <Link href="/cirugia-plastica/cirugia-contorno-corporal">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA CONTORNO CORPORAL</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/abdominoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Abdominoplastia. Tummy Tuck</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/braquioplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Brazos (braquioplastia). Muslos (cruroplastia)</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/liposuccion" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Liposucción. Lipedema</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/gluteoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Gluteoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/cirugia-facial">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA FACIAL</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/blefaroplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Blefaroplastia (superior e inferior)</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/otoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Otoplastia. Orejas en soplillo. Lóbulos rasgados.</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/rinoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Rinoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/mentoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Mentoplastia</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/lifting-facial" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Lifting cervicofacial</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/bichectomia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Bichectomía</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/lip-lift" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Cirugía de labios. Lip lift</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/cirugia-genital">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA GENITAL</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/ninfoplastia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Ninfoplastia</Text>
                                                        </Link>

                                                        <Link href="/cirugia-plastica/cirugia-reconstructiva">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA RECONSTRUCTIVA</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/cirugia-piel">
                                                            <Text fontWeight="medium" fontSize="sm" color="black" mt={2}>CIRUGÍA DE LA PIEL</Text>
                                                        </Link>
                                                        <Link href="/cirugia-plastica/extirpacion-lesiones-cutaneas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Extirpación de lesiones cutáneas</Text>
                                                        </Link>
                                                    </>
                                                )}
                                                {link.href === '/medicina-estetica' && (
                                                    <>
                                                        <Link href="/medicina-estetica/rellenos" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Rellenos</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/injerto-capilar" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Injerto Capilar</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/mesoterapia" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Mesoterapia</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/peelings" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Peelings</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/lifting-microcanulas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Lifting Microcánulas</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/tratamiento-manchas" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Tratamiento para quitar manchas</Text>
                                                        </Link>
                                                        <Link href="/medicina-estetica/toxina-botulinica" onClick={onClose}>
                                                            <Text fontSize="sm" color="gray.700">Toxina botulínica</Text>
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
                                        <Text color="black" fontWeight="medium">{link.text}</Text>
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
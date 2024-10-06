import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"

interface Props {
    isOpen: boolean;
    onClose: () => void;
    Links: {
        href: string;
        text: string;
    }[];
}

export const MenuDrawer = ({ isOpen, onClose, Links }: Props) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menú</DrawerHeader>
                <DrawerBody>
                    <VStack
                        spacing={4}
                        align="stretch"
                    >
                        {
                            Links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={onClose}
                                >
                                    {link.text}
                                </Link>
                            ))
                        }
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
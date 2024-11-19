"use client"

import React, { useState } from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi';

interface Props {
    data: {
        pregunta: string;
        respuesta: string;
    }[]
}

export default function AccordionComponent({ data }: Props) {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);

    const toggleAccordion = (index: number) => {
        setActiveIndexes(prevIndexes => 
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        );
    };

    return (
        <Flex
            py={{ base: "30px", md: "50px" }}
            pb={{ base: "50px", md: "100px" }}
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            w="100%"
            flexDirection="column"
        >
            {data?.map(({ pregunta, respuesta }, index) => (
                <Box key={index} mb={4}>
                    <Flex
                        as="button"
                        onClick={() => toggleAccordion(index)}
                        borderBottom="1px solid"
                        borderColor="#DDDDDD"
                        w="100%"
                        alignItems="center"
                        py={{ base: "10px", md: "15px" }}
                        cursor="pointer"
                    >
                        <Icon
                            as={BiChevronDown}
                            transform={activeIndexes.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)'}
                            transition="transform 0.2s"
                            mr={{ base: "10px", md: "20px" }}
                        />
                        <Text
                            color="black"
                            fontSize={{ base: "10px", md: "12px" }}
                            fontWeight="400"
                            textTransform="uppercase"
                            letterSpacing="0.666667px"
                        >
                            {pregunta}
                        </Text>
                    </Flex>

                    <AnimatePresence>
                        {activeIndexes.includes(index) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Flex
                                    flexDirection={{ base: "column", md: "row" }}
                                    gap={{ base: "20px", md: "60px", lg: "140px" }}
                                    p={{ base: "15px", md: "20px" }}
                                >
                                    <Text
                                        w={{ base: "100%", md: "50%", lg: "30%" }}
                                        color="black"
                                        fontSize={{ base: "18px", md: "24px" }}
                                        fontWeight="400"
                                        mb={{ base: "10px", md: "0" }}
                                    >
                                        {pregunta}
                                    </Text>

                                    <Text
                                        w={{ base: "100%", md: "60%" }}
                                        color="secondary_font"
                                        fontSize={{ base: "12px", md: "14px" }}
                                        fontWeight="300"
                                    >
                                        {respuesta}
                                    </Text>
                                </Flex>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            ))}
        </Flex>
    );
}

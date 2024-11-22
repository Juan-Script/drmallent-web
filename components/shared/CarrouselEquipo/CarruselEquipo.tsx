"use client"

import React, { useState, useEffect } from 'react'
import { CardEquipoInt, cardEquipo } from '@/data/cardEquipo'
import { Box, Flex, Text } from '@chakra-ui/react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarruselArrows'
import useEmblaCarousel from 'embla-carousel-react'
import "./carrusel.css"
import CardEquipo from '../CardEquipo'
import CardEquipoSkeleton from './CardEquipoSkeleton'

export default function CarruselEquipo() {
  const [isLoading, setIsLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    slidesToScroll: 1,
    skipSnaps: false,
    loop: false
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
  } = usePrevNextButtons(emblaApi)

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollTo(emblaApi.selectedScrollSnap() - 1)
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      className="embla"
      pl={{ base: "20px", sm: "30px", md: "60px", lg: "85px" }}
      py={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={{ base: "15px", sm: "20px", md: "30px", lg: "40px" }}
        px={{ base: "20px", lg: "0" }}
      >
        <Text
          color={"black"}
          fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "34px" }}
          fontWeight={"400"}
          lineHeight={{ base: "28px", sm: "32px", md: "37px", lg: "45.16px" }}
          letterSpacing={"0.34px"}
        >
          Nuestro equipo
        </Text>

        <Flex>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </Flex>
      </Flex>

      <Box overflow="hidden" ref={emblaRef}>
        <Flex className="embla__container">
          {isLoading
            ? Array(3).fill(0).map((_, index) => (
              <Box key={index} className="embla__slide">
                <CardEquipoSkeleton />
              </Box>
            ))
            : cardEquipo?.map((e: CardEquipoInt, index: number) => (
              <Box key={index} className="embla__slide">
                <CardEquipo {...e} />
              </Box>
            ))
          }
        </Flex>
      </Box>
    </Box>
  )
}

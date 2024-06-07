"use client"
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

export default function CarruselEquipo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <Box 
      className="embla"
      pl="85px"
      py="80px"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pr="100px"
        mb="40px"
      >

      <Text
        color={"black"}
        fontSize={"34px"}
        fontWeight={"400"}
        lineHeight={"45.16px"}
        letterSpacing={"0.34px"}
      >
        Nuestro equipo
      </Text>

      <Flex>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </Flex>
      </Flex>

      <Box overflow="hidden" ref={emblaRef}>
        <Flex
          gap={"40px"}
        >
          {cardEquipo?.map((e: CardEquipoInt, index: number) => (
            <CardEquipo
              key={index}
              {...e}
            />
          ))}

        </Flex>
      </Box>
    </Box>
  )
}

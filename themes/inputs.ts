import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    color: '#989898',
    fontFamily: 'Inter',
    fontSize: '13px',
    fontWeight: '400',
    lineHeight: 'normal',
    _placeholder: {
        color: '#989898',
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: 'normal'
    }
  },
})

export const inputTheme = defineMultiStyleConfig({ 
    baseStyle,
})
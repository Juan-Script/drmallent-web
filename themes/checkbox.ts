import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
    label: {
        color: "#6B6B6B",
        fontSize: "10px",
        fontWeight: "400",
        lineHeight: "20px"
    },
    control: {
        marginTop: "3px",
        borderRadius: 2.5,
        borderColor: "#6B6B6B",
        borderWidth: "1px",
        _checked: {
            bg: "#6B6B6B",
            borderColor: "#6B6B6B",
            boxShadow: "none",
            outline: "none"
        },
        _hover: {
            _checked: {
                bg: "#6B6B6B",
                borderColor: "#6B6B6B",
                boxShadow: "none",
                outline: "none"
            }
        }
    },
    container: {
        display: "flex",
        alignItems: "start",
        cursor: "pointer",
    }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
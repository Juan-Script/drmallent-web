/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { checkboxTheme } from "./checkbox";
import { inputTheme } from "./inputs";

const breakpoints = {
    '2xs': '300px',
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1228px',
    xl: '1440px',
    '2xl': '1650px',
    '3xl': '2000px'
};

export const theme = extendTheme({
    breakpoints,
    colors,
    components: {
        Checkbox: checkboxTheme,
        Input: inputTheme
    },
});
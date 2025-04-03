import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        &, &.light-mode {
            --color-grey-0: #fff;
            --color-grey-50: #f9f9fa;
            --color-grey-100: #f3f3f5;
            --color-grey-200: #e8e8ec;
            --color-grey-300: #d4d4db;
            --color-grey-400: #a9a9b7;
            --color-grey-500: #7e7e92;
            --color-grey-600: #5c5c70;
            --color-grey-700: #414156;
            --color-grey-800: #2c2c3d;
            --color-grey-900: #19171d;
        }
        
        &.dark-mode {
            --color-grey-0: #19171d;
            --color-grey-50: #2c2c3d;
            --color-grey-100: #414156;
            --color-grey-200: #5c5c70;
            --color-grey-300: #7e7e92;
            --color-grey-400: #a9a9b7;
            --color-grey-500: #d4d4db;
            --color-grey-600: #e8e8ec;
            --color-grey-700: #f3f3f5;
            --color-grey-800: #f9f9fa;
            --color-grey-900: #fff;
        }
    }
`;

export default GlobalStyles;

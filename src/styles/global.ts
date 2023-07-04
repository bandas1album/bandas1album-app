import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
${normalize}

[data-theme="light"] {
  --color-primary: #bc9d75;
  --color-primary-rgb: 188, 157, 117;
  --color-primary-shade: #a58a67;
  --color-primary-tint: #c3a783;
  --color-secondary: #922909;
  --color-tertiary: #402e32;
  --color-light: #fff;
}

[data-theme="dark"] {
  --color-primary: #292556;
  --color-primary-rgb: 41, 37, 86;
  --color-primary-shade: #24214c;
  --color-primary-tint: #3e3b67;
  --color-secondary: #00c5df;
  --color-tertiary: #e8d5b5;
  --color-light: #fff;
}

html,body, #__next {
  min-height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

body {
  font-weight: 400;
  line-height: normal;
  background-color: var(--color-primary);
  color: var(--color-light);
  transition: 0.2s background-color ease;
  padding-bottom: 152px;
}
`

export default GlobalStyles

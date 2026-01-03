import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
${normalize}

[data-theme="light"] {
  /* PRIMARY – #bc9d75 */
  --color-primary-50:  #f6f1ea;
  --color-primary-100: #efe5d7;
  --color-primary-200: #e0ccb4;
  --color-primary-300: #d1b291;
  --color-primary-400: #c3a27f;
  --color-primary-500: #bc9d75;
  --color-primary-600: #a98c68;
  --color-primary-700: #8f7658;
  --color-primary-800: #756148;
  --color-primary-900: #5b4b38;

  /* SECONDARY – #922909 */
  --color-secondary-50:  #f7eaea;
  --color-secondary-100: #efd4cf;
  --color-secondary-200: #dfa99f;
  --color-secondary-300: #cf7e6f;
  --color-secondary-400: #b8523a;
  --color-secondary-500: #922909;
  --color-secondary-600: #822408;
  --color-secondary-700: #6d1f07;
  --color-secondary-800: #581906;
  --color-secondary-900: #431305;

  /* TERTIARY – #402e32 */
  --color-tertiary-50:  #ece9ea;
  --color-tertiary-100: #d9d2d4;
  --color-tertiary-200: #b3a5a9;
  --color-tertiary-300: #8c787e;
  --color-tertiary-400: #665158;
  --color-tertiary-500: #402e32;
  --color-tertiary-600: #39292d;
  --color-tertiary-700: #302326;
  --color-tertiary-800: #271d1f;
  --color-tertiary-900: #1e1618;

  /* WARNING – #EB8A65 */
  --color-warning-50:  #fdf2ee;
  --color-warning-100: #fbe3da;
  --color-warning-200: #f6c7b4;
  --color-warning-300: #f2ab8f;
  --color-warning-400: #ee9776;
  --color-warning-500: #eb8a65;
  --color-warning-600: #d77d5b;
  --color-warning-700: #b6694c;
  --color-warning-800: #95543d;
  --color-warning-900: #743f2e;

  --color-light: #ffffff;
}

[data-theme="dark"] {
  /* PRIMARY – #292556 */
  --color-primary-50:  #eaeaef;
  --color-primary-100: #d4d3df;
  --color-primary-200: #aaa8c0;
  --color-primary-300: #7f7ea0;
  --color-primary-400: #55537f;
  --color-primary-500: #292556;
  --color-primary-600: #24214d;
  --color-primary-700: #1e1c41;
  --color-primary-800: #181635;
  --color-primary-900: #121028;

  /* SECONDARY – #00c5df */
  --color-secondary-50:  #e6f9fc;
  --color-secondary-100: #ccf3f9;
  --color-secondary-200: #99e6f3;
  --color-secondary-300: #66daee;
  --color-secondary-400: #33cfe8;
  --color-secondary-500: #00c5df;
  --color-secondary-600: #00b1c9;
  --color-secondary-700: #0093a8;
  --color-secondary-800: #007487;
  --color-secondary-900: #005666;

  /* TERTIARY – #e8d5b5 */
  --color-tertiary-50:  #fcf9f4;
  --color-tertiary-100: #f9f2e9;
  --color-tertiary-200: #f2e5d3;
  --color-tertiary-300: #ebd8bd;
  --color-tertiary-400: #e5d1ad;
  --color-tertiary-500: #e8d5b5;
  --color-tertiary-600: #d1c09f;
  --color-tertiary-700: #b0a384;
  --color-tertiary-800: #8f8669;
  --color-tertiary-900: #6e694f;

  /* WARNING – #EB8A65 */
  --color-warning-50:  #fdf2ee;
  --color-warning-100: #fbe3da;
  --color-warning-200: #f6c7b4;
  --color-warning-300: #f2ab8f;
  --color-warning-400: #ee9776;
  --color-warning-500: #eb8a65;
  --color-warning-600: #d77d5b;
  --color-warning-700: #b6694c;
  --color-warning-800: #95543d;
  --color-warning-900: #743f2e;

  --color-light: #ffffff;
}


html,body, #__next {
  height: 100%;
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
  background-color: var(--color-primary-500);
  color: var(--color-light);
  transition: 0.2s background-color ease;
}
`

export default GlobalStyles

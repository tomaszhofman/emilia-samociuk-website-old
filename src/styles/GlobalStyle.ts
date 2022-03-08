import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  :root {
    --color-primary: hsla(30, 29%, 95%, 1);
    --color-text-primary: hsla(37, 10%, 16%, 1);
    --color-text-secondary: hsla(0, 0%, 26%, 1);
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /*
  2. Remove default margin
*/
  * {
    margin: 0;
  }
  /*
      3. Allow percentage-based heights in the application
    */
  html,
  body {
    height: 100%;
    font-family: 'Montserrat';
    font-size: 62.5%;
  }
  /*
      Typographic tweaks!
      4. Add accessible line-height
      5. Improve text rendering
    */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    background-color: var(--color-primary);
  }
  /*
      6. Improve media defaults
    */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /*
      7. Remove built-in form typography styles
    */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /*
      8. Avoid text overflows
    */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
      9. Create a root stacking context
    */
  #root,
  #__next {
    isolation: isolate;
  }
`}
`;

// External imports

import styled, { createGlobalStyle } from "styled-components";

// Global styles
export const GlobalStyle = createGlobalStyle`
  /* STYLE RESET (inspired by https://piccalil.li/blog/a-modern-css-reset/) */
  
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  /* SITE-WIDE STYLING: ELEMENT BEHAVIOR */
  
  /* Add global border-box */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* Set site-wide smooth scrolling */
  html:focus-within {
    scroll-behavior: smooth;
  }
  
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.25;
  }
  
  /* Images fill container */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  :root {
   --background-color: #282c34;
  --h1-size: 2em;
  --h1-font: "Raleway", Helvetica, sans-serif;
  --h1-color: #eee;
  --p-size: 1em;
  --p-font: "Open Sans", Arial, sans-serif;
  --p-color: #eee;
  --gutter: 15vw;
 
  }
  
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

// Default element styles

export const DefaultH1 = styled.h1`
  font-family: var(--h1-font);
  color: var(--h1-color);
`;

export const DefaultP = styled.p`
  font-size: var(--p-size);
  font-family: var(--p-font);
  color: var(--p-color);
  display: inline;
`;

export const DefaultA = styled.a`
  color: var(--p-color);
  text-decoration-line: underline;
  text-decoration-color: var(--p-color);
  text-decoration-skip-ink: none;
  text-decoration-thickness: 1px;
`;

// Extendable styles

export const Knob = styled.div`
  background-color: var(--background-color);
  aspect-ratio: 1/1;
  border-radius: 50%;
  height: 75%;
  z-index: 3;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 50%;
    width: 1px;
    background-color: white;
    z-index: 5;
    right: 50%;
    transform: rotate(0deg);
    transform-origin: bottom center;
  }
`;

// Individual elements

export const App = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  /* Remove browser default outline during keydown event */
  &:focus-visible {
    outline: none;
  }
`;

export const Attr = styled(DefaultP)`
  display: block;
  font-style: italic;
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: #111;
  border-radius: 5px;
  display: grid;
  grid-template:
    "logo display metronome volume" auto
    "logo display metronome volume" auto
    "logo display metronome volume" auto
    "logo display metronomeLabel volumeLabel" 22% / 1fr 2fr 1fr 1fr;
  place-items: center;
`;

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 30%;
  grid-area: display;
  background-color: gray;
  text-align: center;
  display: block;
  margin: auto; display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DrumMachine = styled.div`
  padding: 2vw;
  width: calc(100vw - 2 * var(--gutter));
  min-width: 300px;
  max-width: 550px;
  height: 80vh;
  min-height: 300px;
  max-height: 800px;
  border: 0.5px solid black;
  border-radius: 10px;
  background-color: #ba1e2e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
`;

export const Logo = styled(DefaultP)`
  font-family: "Carter One", display;
  grid-area: logo;
  text-align: center;
  width: 100%;
  display: block;
  margin: auto;
`;

export const MetronomeLabel = styled(DefaultP)`
  grid-area: metronomeLabel;
`;

export const PadsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5vw;
  min-height: 0;
  flex-grow: 1;
  border-radius: 5px;
`;

export const Title = styled(DefaultH1)`
  font-size: var(--h1-size);
  display: block;
`;

export const VolumeLabel = styled(DefaultP)`
  grid-area: volumeLabel;
`;

import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  colorPrimary: '#FFEBD9',
  pinkLight: '#FFF8F2',
  colorSecondary: '#E66767',
  yellow: '#FFB930',
  white: '#FFFFFF',
  black: '#000000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 90%;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 95%;
      }
    }
  }

  body {
    background-color: ${Colors.pinkLight};
    color: ${Colors.colorSecondary};
  }
`

export const Logo = styled.img`
  width: 160px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
  }
`

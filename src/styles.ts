import { styled, createGlobalStyle } from 'styled-components'

export const Colors = {
  colorPrimary: '#FFEBD9',
  pinkLight: '#FFF8F2',
  colorSecondary: '#E66767',
  yellow: '#FFB930',
  white: '#FFFFFF',
  black: '#000000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Colors.white};
    color: ${Colors.colorSecondary};
  }
`

export const AppContainer = styled.div`
  background-color: ${Colors.pinkLight};
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

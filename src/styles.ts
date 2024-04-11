import { styled, createGlobalStyle } from 'styled-components'

export const Colors = {
  colorPrimary: '#FFEBD9',
  colorSecondary: '#E66767',
  yellow: '#FFB930',
  white: '#FFFFFF',
  black: '#000000',
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

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

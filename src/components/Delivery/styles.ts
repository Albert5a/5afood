import styled from 'styled-components'
import { ButtonProduct } from '../Button/styles'
import { Colors } from '../../styles'

type InputProps = {
  maxWidth?: string
}

export const FormCheckout = styled.div`
  > h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  ${ButtonProduct} {
    margin-bottom: 8px;
  }
`

export const InputContent = styled.div<InputProps>`
  font-size: 14px;
  width: ${(props) => props.maxWidth};

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 8px;
    height: 32px;
    width: 100%;
    background-color: ${Colors.pinkLight};
    padding: 0 8px;
    border: 1px solid ${Colors.colorSecondary};
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
`

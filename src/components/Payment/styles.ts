import styled from 'styled-components'
import { Colors } from '../../styles'

export const SmallerInput = styled.div`
  font-size: 14px;
  width: 30%;

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

export const BiggerInput = styled.div`
  font-size: 14px;
  width: 70%;

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

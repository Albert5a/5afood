import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 8px;
  background-color: ${Colors.white};
  color: ${Colors.colorSecondary};
  border: none;
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  background-color: ${Colors.colorSecondary};
  color: ${Colors.white};
  border: none;
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: none;
`

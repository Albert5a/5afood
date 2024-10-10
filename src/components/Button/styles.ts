import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles'

export const ButtonProduct = styled.button`
  width: 100%;
  height: 24px;
  padding: 4px;
  background-color: ${Colors.pinkLight};
  color: ${Colors.colorSecondary};
  font-size: 14px;
  font-weight: bold;
  border: none;
  display: inline-block;
  cursor: pointer;
  align-self: flex-end;
  margin-top: auto;     /* Empurra o botão para o final */
`

export const ButtonRestaurant = styled(Link)`
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

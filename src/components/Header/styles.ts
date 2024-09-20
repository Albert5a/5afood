import styled from 'styled-components'
import { Colors } from '../../styles'
import VectorHeader from '../../assets/images/VectorHeader.png'

export const HeaderBar = styled.header`
  background-color: ${Colors.colorPrimary};
  background-image: url(${VectorHeader});
  background-size: cover;
  background-position: center;
  padding: 24px;
  display: flex;
  height: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  width: 540px;
  text-align: center;
`


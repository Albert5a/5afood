import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${Colors.colorPrimary};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  height: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  width: 35%;
  text-align: center;
`


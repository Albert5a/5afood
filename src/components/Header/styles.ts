import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderBar = styled.div`
  background-color: ${Colors.colorPrimary};

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

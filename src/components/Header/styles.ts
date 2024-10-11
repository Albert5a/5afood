import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const HeaderBar = styled.div`
  background-color: ${Colors.colorPrimary};
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 24px;
  display: flex;
  height: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    height: 220px;
    padding: 16px;
  }
`

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  width: 540px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 460px;
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    font-size: 24px;
  }
`

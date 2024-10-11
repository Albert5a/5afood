import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import VectorHeader from '../../assets/images/VectorHeader.png'

export const HeaderBar = styled.header`
  background-color: ${Colors.colorPrimary};
  background-image: url(${VectorHeader});
  background-size: cover;
  background-position: center;
  padding: 24px 48px;
  display: flex;
  height: 160px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      height: 120px;
      padding: 8px;
    }

  > h3 {
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  > a {
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      width: 70px;
    }
  }
`




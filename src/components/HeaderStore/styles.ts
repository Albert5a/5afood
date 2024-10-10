import styled from 'styled-components'
import { Colors } from '../../styles'
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

  > a {
    cursor: pointer;
  }
`



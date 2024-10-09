import styled from 'styled-components'
import { Colors } from '../../styles'

export const BannerStore = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const BannerStoreContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  font-size: 32px;
  z-index: 2;
  position: relative;
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 0;

  p {
    font-weight: 100;
  }
`

export const TypeFood = styled.p`
  text-transform: capitalize;
`

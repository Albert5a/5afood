import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const BannerStore = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    height: 160px;
  }

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

  > h3 {
    @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
  }

  p {
    font-weight: 100;
  }

  

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px 54px;
  }
`

export const TypeFood = styled.p`
  text-transform: capitalize;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

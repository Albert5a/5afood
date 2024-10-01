import styled from 'styled-components'
import { Colors } from '../../styles'
import VectorHeader from '../../assets/images/VectorHeader.png'
import Massa from '../../assets/images/massa.png'

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
`

export const BannerStore = styled.div`
  height: 280px;
  background-image: url(${Massa});
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

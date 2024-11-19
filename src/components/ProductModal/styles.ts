import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { ButtonProduct } from '../Button/styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  &.visible {
    display: flex;
  }

  ${ButtonProduct} {
    width: 218px;
    height: 24px;
  }

  // ao descomponentizar modal after vira uma classe .overlay para que o fechamento do modal aconteça somente ao clicar no fundo

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  height: 344px;
  width: 100%;
  margin: 0 auto;
  background-color: ${Colors.colorSecondary};
  padding: 8px;
  color: ${Colors.white};
  /* position: relative; */
  z-index: 1;

  > header {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: end;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 688px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CloseButton = styled.img`
  cursor: pointer;
  color: ${Colors.white};
`

export const InfoContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  > img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 240px;
      height: 240px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 140px;
      height: 140px;
      margin-bottom: 4px;
      margin-right: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      text-align: center;
    }
  }
`

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
    font-size: 16px;
  }
`

export const ModalText = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.4em;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.1em;
  }
`

export const ModalInfo = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`

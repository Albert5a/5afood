import styled from 'styled-components'
import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  ${ButtonContainer} {
    width: 218px;
    height: 24px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* z-index: 4; */
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
`

export const CloseButton = styled.img`
  cursor: pointer;
  color: ${Colors.white};
`

export const InfoContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  /* padding: 24px; */

  > img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`

export const ModalText = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`

export const ModalInfo = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`

export const InfoButton = styled.div``

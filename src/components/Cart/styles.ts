import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { Props } from '.'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 3;

  &.is-open {
    display: flex;
  }
`

export const CloseButton = styled.img`
  cursor: pointer;
  color: ${Colors.white};
`

export const SideBar = styled.aside<Props>`
  background-color: ${Colors.colorSecondary};
  color: ${Colors.white};
  z-index: 1;
  width: 360px;
  padding: 8px 8px 32px 8px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(128, 128, 128, 0.6) rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

  header {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: end;
    margin-bottom: 8px;
  }
`

export const ProductsList = styled.ul`
  margin-bottom: 40px;
`

export const Product = styled.li`
  width: 344px;
  height: 100px;
  display: flex;
  padding: 8px;
  background-color: ${Colors.colorPrimary};
  color: ${Colors.colorSecondary};
  position: relative;
  margin-bottom: 16px;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
  object-fit: cover;
`

export const Delete = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const NamePrice = styled.div`
  > h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  > p {
    font-size: 14px;
  }
`

export const TotalValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

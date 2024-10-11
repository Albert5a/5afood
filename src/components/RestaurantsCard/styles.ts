import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CardComponent = styled(Link)`
  width: 472px;
  position: relative;
  text-decoration: none;
  color: ${Colors.colorSecondary};

  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
  }
`

export const ProductImage = styled.img`
  max-width: 100%;
  width: 472px;
  height: 217px;
  display: block;
  object-fit: cover;
  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
    height: 160px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const InfoContainter = styled.div`
  max-width: 100%;
  width: 472px;
  height: 181px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-right: 1px solid ${Colors.colorSecondary};
  border-bottom: 1px solid ${Colors.colorSecondary};
  border-left: 1px solid ${Colors.colorSecondary};
  justify-content: space-between;
`

export const TitleValuationContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
  }
`

export const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const ValuationContent = styled.div`
  display: flex;
  align-items: center;
`

export const Valuation = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 4px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

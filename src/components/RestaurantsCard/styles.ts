import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CardComponent = styled(Link)`
  width: 472px;
  margin-top: 40px;
  position: relative;
  text-decoration: none;
  color: ${Colors.colorSecondary};
`

export const ProductImage = styled.img`
  width: 472px;
  height: 217px;
  display: block;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
export const InfoContainter = styled.div`
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
`

export const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const ValuationContent = styled.div`
  display: flex;
  align-items: center;
`

export const Valuation = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 4px;
`
export const Description = styled.p`
  font-size: 14px;
`

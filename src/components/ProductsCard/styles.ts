import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  background-color: ${Colors.colorSecondary};
  width: 320px;
  padding: 8px;
  height: 338px;
`

export const ProductImage = styled.img`
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
  display: block;
  object-fit: cover;
`

export const InfoContainter = styled.div`
  color: ${Colors.pinkLight};
  width: 100%;
  display: flex;
  height: 147px;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

export const TitleValuationContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`
export const Description = styled.p`
  font-size: 14px;
`

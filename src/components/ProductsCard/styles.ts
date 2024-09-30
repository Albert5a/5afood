import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardComponent = styled.div`
  background-color: ${Colors.colorSecondary};
  width: 320px;
  padding: 8px;
  margin-top: 40px;
  height: 338px;
`

export const ProductImage = styled.img`
  width: 304px;
  margin-bottom: 8px;
  display: block;
`

export const InfoContainter = styled.div`
  color: ${Colors.pinkLight};
  width: 300px;
  display: flex;
  height: 163px;
  flex-direction: column;
  padding: 0;
  justify-content: space-between;
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

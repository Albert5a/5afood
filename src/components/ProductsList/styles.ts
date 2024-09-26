import styled from 'styled-components'
import { Props } from '.'
import {
  CardComponent,
  InfoContainter,
  Infos,
  ProductImage,
  ProductTitle,
  ValuationContent
} from '../Product/styles'
import { Colors } from '../../styles'

export const Container = styled.section`
  padding: 48px 0 120px 0;
`

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 24px;

  ${CardComponent} {
    background-color: ${(props) =>
      props.columns === 'restaurant' ? Colors.colorSecondary : Colors.white};
    width: ${(props) => (props.columns === 'restaurant' ? '320px' : '472px')};
    padding: ${(props) => (props.columns === 'restaurant' ? '8px' : '0')};
    height: ${(props) => (props.columns === 'restaurant' ? '338px' : '')};
  }

  ${ProductImage} {
    width: ${(props) => (props.columns === 'restaurant' ? '304px' : '472px')};
    margin-bottom: ${(props) => (props.columns === 'restaurant' ? '8px' : '')};
  }

  ${Infos} {
    display: ${(props) => (props.columns === 'restaurant' ? 'none' : 'flex')};
  }

  ${InfoContainter} {
    color: ${(props) =>
      props.columns === 'restaurant'
        ? Colors.pinkLight
        : Colors.colorSecondary};
    width: ${(props) => (props.columns === 'restaurant' ? '300px' : '472px')};
    height: ${(props) => (props.columns === 'restaurant' ? 'full' : '')};
    padding: ${(props) => (props.columns === 'restaurant' ? '0' : '')};
    padding-bottom: ${(props) => (props.columns === 'restaurant' ? '8px': '')};
  }

  ${ProductTitle} {
    font-size: ${(props) => (props.columns === 'restaurant' ? '16px' : '')};
  }

  ${ValuationContent} {
    display: ${(props) => (props.columns === 'restaurant' ? 'none' : '')};
  }
`

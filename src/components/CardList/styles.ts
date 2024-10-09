import styled from 'styled-components'
import { Props } from '.'

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  margin-top: ${(props) => (props.columns === 'home' ? '0' : '24px')};
  gap: ${(props) => (props.columns === 'home' ? '80px' : '32px')};
  margin-bottom: 120px;
  column-gap: 24px;
`

import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section`
  padding: 48px 0 120px 0;
`

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 24px;
`

import styled from 'styled-components'
import { Props } from '.'
import { breakpoints } from '../../styles'

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  margin-top: ${(props) => (props.columns === 'home' ? '80px' : '56px')};
  gap: ${(props) => (props.columns === 'home' ? '80px' : '32px')};
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    /* display: flex; */
    display: ${(props) => (props.columns === 'home' ? 'flex' : '')};
    flex-direction: ${(props) => (props.columns === 'home' ? 'column' : '')};
    gap: ${(props) => (props.columns === 'home' ? '32px' : '24px')};
    padding: ${(props) => (props.columns === 'home' ? '' : '0 40px')};
    grid-template-columns: 1fr 1fr;
    margin-bottom: 80px;
    align-items: center;
    justify-content: flex-start;

    margin-top: ${(props) => (props.columns === 'home' ? '40px' : '30px')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: ${(props) => (props.columns === 'home' ? '' : 'flex')};
    flex-direction: ${(props) => (props.columns === 'home' ? '' : 'column')};
    /* padding: ${(props) => (props.columns === 'home' ? '' : '0 40px')}; */
    grid-template-columns: 1fr;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;

    margin-top: ${(props) => (props.columns === 'home' ? '40px' : '30px')};
  }
`

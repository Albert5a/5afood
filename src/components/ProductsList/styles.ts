import styled from "styled-components";
import { Props } from ".";
import { CardComponent } from "../Product/styles";
import { Colors } from "../../styles";

export const Container = styled.section`
  padding: 48px 0;

`

export const List = styled.ul<Omit<Props, 'restaurants'>>`
  display: grid;
  grid-template-columns: ${props => props.columns === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 24px;

  ${CardComponent} {
    background-color: ${props => props.columns === 'restaurant' ? Colors.colorSecondary : Colors.white};
  }
`

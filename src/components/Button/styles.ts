import styled from "styled-components";
import { Props } from ".";
import { Colors } from "../../styles";

export const ButtonContainer = styled.button<Props>`
  padding: 8px;
  background-color: ${props => props.color === 'buy' ? `${Colors.white}` : `${Colors.colorSecondary}`};
  color: ${props => props.color === 'buy' ? `${Colors.colorSecondary}` : `${Colors.white}`};
  border: none;
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
`

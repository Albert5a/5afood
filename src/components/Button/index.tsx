import React from "react";
import { ButtonContainer } from "./styles";

export type Props = {
  color: 'info' | 'buy';
  children: string;
}

const Button = ({color = 'buy', children}: Props) => {
  return (
    <ButtonContainer color={color}>{children}</ButtonContainer>
  )
}

export default Button;

import React from "react"
import { TagContainer } from "./styles"
import { JsxElement } from "typescript"


export type Props = {
  size?: 'small' | 'big'
  children: string | undefined
}

const Tag = ({size = 'small', children}: Props) => {
  return (
    <TagContainer size={size}>{children}</TagContainer>
  )
}

export default Tag

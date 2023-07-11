import React, {  HTMLAttributes, ReactNode } from 'react'
import {styled} from "styled-components"
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children : ReactNode,
    onClick : ()=>void,
    variant : 'primary' | 'secondary'
}


const Button  = ({ variant ="primary", ...props}: Props) => {

  const Container = styled.button`
    all: unset;
    color : white;
   padding: 10px;
   border: none;
   border-radius: 10px;
   cursor: default;
   background-color: ${variant === "primary" ? "teal" : "black"};

   &:focus {
    background-color: grey
   }
`



  return (
    <Container {...props}>{props.children}</Container>
  )
}

export default Button
import React from 'react'
import styled from 'styled-components'

export interface QPProps extends HTMLAttributes<HTMLButtonElement>  {
    quantity : ReactNode,
    handleQuantity : (...args : any)=>void
}

const QuantityPicker = ({quantity, handleQuantity}: QPProps) => {

    const Container = styled.div`
        width: 100px;
        height: 30px;
        border: 1px solid rgba(201, 198, 198, 0.4);
        box-shadow: 5px 3px 3px 5px white;
        border-radius: 5px;
    `
    const Wrapper = styled.div`
        background-color: transparent;
        display:flex;
        align-items:center;
        align-content:center;
        justify-content: space-between;
        flex-direction:row;
        height: 100%;
    `

    const Picker = styled.button`
        all:unset;
        flex:1;
        cursor: default;
        display:flex;
        align-items:center;
        align-content:center;
        justify-content: center;
        font-size: 1em;
        font-weight: 500;
    `
    const Quantity = styled.div`
        font-size: 1em;
        font-weight: 500;
        flex: 1;
        border-left: 1px solid rgba(201, 198, 198, 0.4);
        border-right: 1px solid rgba(201, 198, 198, 0.4);
        height: 100%;
        display:flex;
        align-items:center;
        align-content:center;
        justify-content: center;
    `

  return (
    <Container>
        <Wrapper>
            <Picker name="add" onClick={(e : any)=>handleQuantity(e)}>+</Picker>
            <Quantity>{quantity}</Quantity>
            <Picker  name="subtract" onClick={(e : any)=>handleQuantity(e)}>-</Picker>
        </Wrapper>
    </Container>
  )
}

export default QuantityPicker
import React from 'react'
import styled from 'styled-components'

export type SelectProps = {
    options : Array<{name : string, value: string}>
}


const Select = ({options}: SelectProps) => {

const Container = styled.select`
    border: 1px solid rgba(145, 142, 142, 0.6);
    border-radius : 5px;
    height: 30px;
    min-width: 150px;
    background-color: transparent;
    text-align: left;
`

const Option = styled.option`
    all: unset;
    border: 1px solid black;
    background-color: transparent;
`



  return (
    <Container defaultValue="Filter">
        <option disabled>Filter</option>
        {options?.map((i)=>{
            return <Option value={i.value}>{i.name}</Option>
        })}
    </Container>
  )
}

export default Select
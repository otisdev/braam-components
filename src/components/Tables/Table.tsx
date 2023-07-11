import React, {useState} from 'react'
import styled from 'styled-components'

export type TableProps = {
  data : Array<any>
}

const Table = ({data}: TableProps) => {

  const [columns, setColumn] = useState<Array<any>>([]);

  const Container =  styled.div`
    min-width : 300px;
    max-height : 500px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 6px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 6px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 6px -1px rgba(0,0,0,0.75); 
  `

  const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  `

  const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    p {
    all:unset;
    width: fit-content;
    border: 1px solid rgba(192, 192, 192, 0.4);
    padding: 2px;
    margin: 2px;
    font-weight: 600;
    font-size: 15px;
  }
  `

  const Columns= styled.div`
    display: flex;
    flex-direction: row;

  `

  const Column = styled.div`
    flex: 1;
  `

  const Rows = styled.div`
   display: flex;
  flex-direction: row;
  `

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  &:first-child {
    flex:1;
  }
`


const columnResolve = (data : Array<any>) =>{
  const columnKeys = Object.keys(data[0]);

  const column = columnKeys.map((i)=> <Column>{i}</Column>)
  setColumn(column);
}


  return (
    <Container>
      <Wrapper>
        <Top>
        </Top>
        <Columns>
        {
        columns
        }
        </Columns>
        <Rows>
          {data.map((i)=>{
            return <Row>
              <div>{i.day}</div>
              <div>{i.week}</div>
              <div>{i.month}</div>
            </Row>
          })}
        </Rows>
      </Wrapper>
    </Container>
  )
}

export default Table
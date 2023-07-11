
import { styled } from 'styled-components'

export interface ProductProps  {
  image : string,
  Name : string
  price : number,
  quantity : number,
  isLoading: boolean
  icons : Array<{icon: string, action: ()=>void}>
}

const Product = (props: ProductProps) => {

  const Container = styled.div`
    width : 180px;
    height:300px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.75);  
    position: relative;

    `

  const Image = styled.div`
    width: 100%;
    height: 65%;

    
  
  `

const Skeleton = styled.div`

.skeleton{
  animation: skeleton-loading 1s linear infinite alternate;
   
   background-color: grey;
   @keyframes skeleton-loading {
  0% {
   background-color: hsl(200,20%, 80%);
   color: hsl(200,20%, 80%);
 }
 100% {
   background-color: hsl(200,20%, 95%);
   color: hsl(200,20%, 80%);
 };
}
 };
 `


  const Img = styled.img`
     object-fit: cover;
      width: 100%;
      height: 100%;
  `

  const Price = styled.div`
    font-size: 15px;
    font-weight: 600;
    height:fit-content;
    margin-top:10px;

  `

const Quantity = styled.div`
font-size: 15px;
font-weight: 500;
height:fit-content;
margin-top:10px;
margin-bottom: 10px;

`
const Name = styled.div`
font-size: 15px;
font-weight: 500;
height:fit-content;
margin-top:10px;

`

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

&:hover{
    opacity: 1;
}
`

const Icon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5 ease-in;

&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`



  return (
    <Skeleton>
      <Container>
        <Name>{props.Name}</Name>
      <Image  className={`${props.isLoading ? "" :"skeleton"}`}>
        <Img  src={props.image} alt="product" />
      </Image>
      <Info>
        {
          props.icons?.map(i=>{
            return <Icon onClick={()=>i.action}><img src={i.icon}></img></Icon>;

          })
        }
      </Info>
      <Price  className={`${props.isLoading ? "" :"skeleton"}`}>R {props.price}</Price>
    <Quantity  className={`${props.isLoading ? "" :"skeleton"}`} >Stock Left : {props.quantity}</Quantity>
    </Container >
    </Skeleton>
  )
}

export default Product
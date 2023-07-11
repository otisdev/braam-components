import Product, { ProductProps } from "../components/Cards/Product";
import {Meta, StoryFn} from "@storybook/react"



const meta : Meta = {
    title : "Cards/Product Card",
    tags: ["autodocs"],
    component: Product
    
}

export default meta;

const Template : StoryFn<ProductProps> = (args) => <Product {...args} />

export const Primary =  Template.bind({})
Primary.args ={
        icons: [{icon: "test", action : ()=>console.log("cart")}, {icon: "test", action : ()=>console.log("wish")}]
}

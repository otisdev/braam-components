import { Meta, StoryFn } from "@storybook/react";
import QuantityPicker, { QPProps } from "../components/Buttons/QuantityPicker"

const meta : Meta = {
    title: "Buttons/Quantity Picker",
    tags: ['autodocs'],
    component: QuantityPicker
}

export default meta;

const Template : StoryFn<QPProps> =(args)=> <QuantityPicker {...args}/>

export const Primary  = Template.bind({});
Primary.args = {
    quantity: 1,

    handleQuantity: (e: React.ChangeEvent<HTMLInputElement>)=>{
            switch(e.target.name){
                case "add":
                    console.log("add to cart");
                    break;
                case "subtract":
                    console.log("take one from cart");
                    break;
                default : 
                    break;
            }
           
    }
}

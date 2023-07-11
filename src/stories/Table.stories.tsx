import { Meta, StoryFn } from "@storybook/react";
import OrderCard, { TableProps } from "../components/Tables/Table";



const meta : Meta = {
    title: "Tables/Table Card",
    component : OrderCard,
    tags : ["autodocs"]
}

export default meta;

const Template : StoryFn<TableProps> = (args)=> <OrderCard {...args} />


export const Primary = Template.bind({});
Primary.args = {
   data : [{
        day  : 1,
        week: 2,
        month: 3
   }]
}
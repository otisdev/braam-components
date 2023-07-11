import Select, { SelectProps } from "../components/Buttons/Select";
import { Meta, StoryFn } from "@storybook/react";



const meta : Meta = {
    title: "Buttons/Select",
    component: Select,
    tags : ["autodocs"],
    args : {

    }
}

export default meta;
const Template : StoryFn<SelectProps> =(args)=> <Select {...args} />

export const Primary = Template.bind({});

Primary.args = {
    options : [{name: "latest", value: "latest"},
    {name: "highest", value: "highest"},
    {name: "lowest", value: "lowest"}]
}


import Button, { Props } from "../components/Buttons/Button";
import {Meta, StoryFn} from "@storybook/react"

const meta : Meta = {
    title: 'Buttons/Button',
    tags: ["autodocs"],
    component : Button,
    argTypes: {
        children : {
            defaultValue : "button"
        },
        onClick : {action :  "cliked"}
    }
}

export default meta;

const Template : StoryFn<Props> = (args) => <Button {...args} />

export const Primary =  Template.bind({})
Primary.args = {
    children: "primary",

}
export const Secondary = Template.bind({})

Secondary.args ={
    variant : "secondary",
    children: "secondary",
}
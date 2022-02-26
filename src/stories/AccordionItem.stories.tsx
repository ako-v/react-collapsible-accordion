import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AccordionItem } from "..";

export default {
  title: "Components/AccordionItem",
  component: AccordionItem,
  argTypes: {}
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = args => (
  <AccordionItem {...args}>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore quod, fugit alias necessitatibus, enim praesentium sunt error odit vero molestiae,
      voluptatibus rerum. Sunt quis quaerat inventore esse dicta aliquid.
    </div>
  </AccordionItem>
);

const Icon = "fa-icon";

export const Default = Template.bind({});

Default.args = {
  open: false,
  title: "title",
  icon: Icon
};

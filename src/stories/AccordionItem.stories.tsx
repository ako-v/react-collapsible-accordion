import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AccordionItem } from "..";
import "./accordion.css";
import Icon from "./assets/Icon";

export default {
  title: "Components/AccordionItem",
  component: AccordionItem,
  argTypes: {
    children: {
      control: {
        type: null
      },
      table: {
        disable: true
      }
    },
    Icon: {
      control: {
        type: null
      }
    },
    itemKey: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = args => (
  <AccordionItem {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod a
    similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed reiciendis
    fugiat! Velit itaque quis enim dolore maxime!
  </AccordionItem>
);

export const Default = Template.bind({});

Default.args = {
  Title: "Default",
  open: true,
  className: ""
};

export const FontIcon = Template.bind({});

FontIcon.args = {
  Title: "Font Icon",
  open: true,
  className: "",
  Icon: "collapsible-single-icon"
};

export const ComponentIcon = Template.bind({});

ComponentIcon.args = {
  Title: "Component Icon",
  open: true,
  className: "",
  Icon: Icon
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Collapsible } from "..";
import "./collapsible.css";
import Icon from "./assets/Icon";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    Icon: {
      control: {
        type: null
      }
    }
  }
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = args => (
  <Collapsible {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum, vitae dolorum iure voluptatibus quasi sint repellat tempora amet similique
    sit temporibus tenetur! Dolores minima veniam, enim eum hic consequatur velit omnis et, eveniet exercitationem numquam harum quaerat quae expedita. Impedit
    libero soluta incidunt, esse ab molestiae deleniti dolorem doloremque.
  </Collapsible>
);

export const Default = Template.bind({});

Default.args = {
  Title: "Default",
  open: true
};

export const FontIcon = Template.bind({});

FontIcon.args = {
  Title: "With font icon",
  open: true,
  Icon: "collapsible-single-icon"
};

export const ComponentIcon = Template.bind({});

ComponentIcon.args = {
  Title: "with icon component",
  open: true,
  Icon: Icon
};

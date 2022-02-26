import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Collapsible } from "..";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    children: { control: "" }
  }
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = args => <Collapsible {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "title",
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum, vitae dolorum iure voluptatibus quasi sint repellat tempora amet
      similique sit temporibus tenetur! Dolores minima veniam, enim eum hic consequatur velit omnis et, eveniet exercitationem numquam harum quaerat quae
      expedita. Impedit libero soluta incidunt, esse ab molestiae deleniti dolorem doloremque.
    </div>
  )
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Accordion, AccordionItem } from "..";
import "./accordion.css";
import Icon from "./assets/Icon";

export default {
  title: "Components/Accordion",
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <AccordionItem Title="one" Icon="accordion-single-icon">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
      a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
      reiciendis fugiat! Velit itaque quis enim dolore maxime!
    </AccordionItem>
    <AccordionItem Title="two" Icon={Icon}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione laudantium quo, nobis dolorem, dicta eum doloribus sunt corporis illo numquam hic,
      at totam id expedita debitis fugit saepe mollitia?
    </AccordionItem>
    <AccordionItem Title="three" open={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
      a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
      reiciendis fugiat! Velit itaque quis enim dolore maxime!
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {
  allowMultipleOpen: false
};

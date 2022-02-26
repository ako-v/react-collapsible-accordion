import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Accordion, AccordionItem } from "..";

export default {
  title: "Components/Accordion",
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <AccordionItem title="first">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
      a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
      reiciendis fugiat! Velit itaque quis enim dolore maxime!
    </AccordionItem>
    <div>salam</div>
    <AccordionItem title="second" open={true}>
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

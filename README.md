# React-Collapsible-Accordion

A React Collapsible and Accordion Component. You can easily implement collapsible and accordion with smooth transitions.

## Demo

You can try the demo [Here](https://ako-v.github.io/react-collapsible-accordion).

## Installation

Install using npm:

```sh
npm install --save react-collapsible-accordion
```

Install using yarn:

```sh
yarn add react-collapsible-accordion
```

## Usage

```js
// Import from the library
import {Collapsible,Accordion,AccordionItem} from 'react-collapsible-accordion';

// use collapsible in your component
<Collapsible  Title="My Title">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
 a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
 reiciendis fugiat! Velit itaque quis enim dolore maxime!
</Collapsilble>

// or use Accordion
<Accordion allowMultipleOpen={true}>
    <AccordionItem Title="one">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
      a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
      reiciendis fugiat! Velit itaque quis enim dolore maxime!
    </AccordionItem>
    <AccordionItem Title="two" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione laudantium quo, nobis dolorem, dicta eum doloribus sunt corporis illo numquam hic,
      at totam id expedita debitis fugit saepe mollitia?
    </AccordionItem>
    <AccordionItem Title="three">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam temporibus beatae recusandae in quisquam ipsa aperiam natus libero, ad labore quod
      a similique facilis non rerum dolor voluptatem odit eveniet repellendus deserunt? Minima, commodi odio. Nulla sint molestiae delectus debitis sed
      reiciendis fugiat! Velit itaque quis enim dolore maxime!
    </AccordionItem>
  </Accordion>
```

## API

Below we have all the props that we can use with the `<Collapsible>` component.
| Name | Type | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **Title** | `string / ComponentType<{}>` | | title of the collapsible item. Title can be a string or you can provide a custom component.|
| **Icon** | `string / ComponentType<{}>` | | Icon can be a font icon class name (string) or a component. if you don't provide it, there will be a default Icon |
| **open** | `boolean` | `false` | is the collapsible opened or closed by default. |
| **onClick** | `function` | `() => void` | Optional click handler.|
| **className** | `string` | | Custom class name for the outer div.|

Below we have all the props that we can use with the `<AccordionItem>` component.
| Name | Type | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **Title** | `string / ComponentType<{}>` | | title of the collapsible item. Title can be a string or you can provide a custom component.|
| **Icon** | `string / ComponentType<{}>` | | Icon can be a font icon class name (string) or a component. if you don't provide it, there will be a default Icon |
| **open** | `boolean` | `false` | is the collapsible opened or closed by default. |
| **className** | `string` | | Custom class name for the outer div.|

Below we have all the props that we can use with the `<Accordion>` component.
| Name | Type | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **allowMultipleOpen** | `boolean` | `false` | set it to true if you want to be able to view multible items opened at the same time. |
| **className** | `string` | | Custom class name for the outer div.|

## License

React Collapsible Accordion is licensed under MIT license, see [LICENSE](LICENSE) for the full license.

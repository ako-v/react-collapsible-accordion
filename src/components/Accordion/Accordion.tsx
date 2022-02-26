import React, { cloneElement, PropsWithChildren, ReactElement, useEffect, useState } from "react";

import AccordionItem, { IAccordionItem } from "./AccordionItem";
import { guid } from "./utils";

export interface IAccordion {
  allowMultipleOpen?: boolean;
  className?: string;
}

const Accordion: React.FC<IAccordion> = ({ allowMultipleOpen = false, children, className }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [itemKeys, setItemKeys] = useState<string[]>([]);
  useEffect(() => {
    const itemKeys = Array.from({ length: React.Children.count(children) }, () => guid());
    let openItems: { [key: string]: boolean } = {};
    React.Children.forEach(children, (child, index) => {
      const item = child as ReactElement<PropsWithChildren<IAccordionItem>>;
      if (allowMultipleOpen) {
        if (item.props.open) {
          openItems[itemKeys[index]] = true;
        }
      } else {
        if (item.props.open) {
          openItems = { [itemKeys[index]]: true };
        }
      }
    });
    setItemKeys(itemKeys);
    if (openItems) {
      setOpenItems(openItems);
    }
  }, []);

  const onClick = (itemKey: string | undefined) => {
    if (itemKey) {
      const isOpen = openItems[itemKey];
      if (allowMultipleOpen) {
        setOpenItems({ ...openItems, [itemKey]: !isOpen });
      } else {
        setOpenItems({ [itemKey]: !isOpen });
      }
    }
  };

  return (
    <div className={["accordion", className ? " " + className : ""].join("")}>
      {React.Children.map(children, (child, index) => {
        const item = child as ReactElement<PropsWithChildren<IAccordionItem>>;

        if (item.type === AccordionItem) {
          return cloneElement(item, { onClick, itemKey: itemKeys[index], open: openItems[itemKeys[index]] });
        } else {
          return child;
        }
      })}
    </div>
  );
};
export default Accordion;

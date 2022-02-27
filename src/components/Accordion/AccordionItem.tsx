import React, { ComponentType, ReactNode, useEffect, useRef, useState } from "react";
import "./Accordion.css";

export interface IAccordionItem {
  className?: string;
  Icon?: string | React.ComponentType;
  itemKey?: string;
  title?: string | ReactNode;
  open?: boolean;
  onClick?: (itemKey: string | undefined) => void;
}

const AccordionItem: React.FC<IAccordionItem> = ({ children, className, Icon, itemKey, onClick, open, title }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);

  // send run parents onClick with itemKey to inform parent which accordion item is clicked
  const handleClick = () => {
    if (onClick) onClick(itemKey);
  };

  // use resizeobserver to handle if child elements of body resized
  useEffect(() => {
    if (!height || !open || !bodyRef.current) return undefined;

    const resizeobserver = new ResizeObserver(el => {
      setHeight(el[0].contentRect.height);
    });
    resizeobserver.observe(bodyRef.current);
    return () => {
      resizeobserver.disconnect();
    };
  }, [open, height]);

  useEffect(() => {
    if (open) {
      setHeight(bodyRef.current?.getBoundingClientRect().height || 0);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className={["accordion-item", open ? " show" : "", className ? " " + className : ""].join("")}>
      <div className="accordion-item__header" onClick={handleClick}>
        {typeof title == "string" ? <div className="accordion-item__title">{title}</div> : title}

        <div className="accordion-item__icon">
          {typeof Icon === "undefined" ? (
            <svg width="100%" viewBox="0 0 24 24">
              <path d="m 12.009153,5.8758464 c -0.829973,0.06896 -1.247432,0.8483662 -1.823958,1.3441438 -2.9411257,2.9547408 -5.8822515,5.9094818 -8.8233772,8.8642228 -1.27137802,1.448644 1.1510703,2.724213 1.9869491,1.339503 2.8875903,-2.901376 5.7751803,-5.802751 8.6627711,-8.7041272 2.994041,3.0083552 5.988082,6.0167092 8.982123,9.0250652 1.231671,1.250733 2.8169,-0.915908 1.525707,-1.802985 C 19.293496,12.70091 16.067639,9.4601354 12.841759,6.2193857 L 12.459635,5.9647804 Z" />
            </svg>
          ) : typeof Icon === "string" ? (
            <i className={Icon} />
          ) : (
            <Icon />
          )}
        </div>
      </div>
      <div style={{ height }} className="accordion-item__body">
        <div className="accordion-item__content" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;

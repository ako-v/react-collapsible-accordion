import React, { ComponentType, useEffect, useRef, useState } from "react";
import "./Collapsible.css";

export interface IProps {
  /**
   * Custom class name for the outer div
   */
  className?: string;
  /**
   *  Icon can be a font icon class name (string) or a component. if you don't provide it, there will be a default Icon
   */
  Icon?: string | ComponentType;
  /**
   *  open or cloded by default
   */
  open?: boolean;
  /**
   *  Title can be a string or you can provide a custom component
   */
  Title?: string | ComponentType;
  /**
   *  Optional click handler
   */
  onClick?: () => void;
}

/**
 * Collapsible component.
 */
const Collapsible: React.FC<IProps> = ({ children, className, Icon, onClick, open = false, Title }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    setIsOpen(open);
    onClick?.();
  }, [open]);

  // use resizeobserver to handle if child elements of body resized
  useEffect(() => {
    if (!height || !isOpen || !bodyRef.current) return undefined;

    const resizeobserver = new ResizeObserver(el => {
      setHeight(el[0].contentRect.height);
    });
    resizeobserver.observe(bodyRef.current);
    return () => {
      resizeobserver.disconnect();
    };
  }, [isOpen, height]);

  useEffect(() => {
    if (isOpen) {
      setHeight(bodyRef.current?.getBoundingClientRect().height || 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={["collapsible", isOpen ? " show" : "", className ? " " + className : ""].join("")}>
      <div className="collapsible__header" onClick={handleClick}>
        {Title && (typeof Title == "string" ? <div className="collapsible__title">{Title}</div> : <Title />)}

        <div className="collapsible__icon">
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
      <div style={{ height }} className="collapsible__body">
        <div className="collapsible__content" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Collapsible;

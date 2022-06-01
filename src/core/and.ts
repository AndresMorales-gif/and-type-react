import { And } from "types/and";

const CreateElement = (
  type: string | Function,
  props: { [key: string]: string | boolean | number | unknown } | null,
  ...children: Array<any>
) => {
  props = props || {};
  props.children = children;
  return {
    type,
    props
  };
};

const render = (
  element: And.andElement | Array<And.andElement>,
  node: HTMLElement
): void => {
  if (Array.isArray(element)) {
    return element.forEach((e) => render(e, node));
  }

  console.log("element", typeof element.type, element);
  if (typeof element.type !== "string") {
    return render(
      element.type({ ...element.props, children: element.props.children }),
      node
    );
  }
  const elementCreated = document.createElement(element.type) as any;

  Object.entries(element.props).forEach(([key, value]) => {
    if (typeof value === "string") {
      elementCreated.setAttribute(key, value);
    } else if (typeof value === "function") {
      elementCreated[key] = value;
    }
  });

  element.props.children.forEach((child) => {
    if (typeof child !== "object") {
      elementCreated.appendChild(document.createTextNode(child));
      return;
    }
    render(child, elementCreated);
  });
  node.appendChild(elementCreated);
};

const and = {
  CreateElement,
  render,
};

export default and;

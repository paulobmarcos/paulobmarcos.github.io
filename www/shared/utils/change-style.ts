// Improves performance. Change value only when needed.
const changeStyle = (element: HTMLElement, property: string, newVal: string | null) => {
  if (element.style.getPropertyValue(property) !== newVal) {
    element.style.setProperty(property, newVal);
  }
};

export default changeStyle;

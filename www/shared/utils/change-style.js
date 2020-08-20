const changeStyle = (element, property, newVal) => {
  // Improves Perfomance. Change value only when needed.
  if (element.style[property] !== newVal) {
    element.style[property] = newVal;
  }
};

export default changeStyle;

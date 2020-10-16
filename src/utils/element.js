export const createElement = (tagName, props) => {
  //export
  const element = document.createElement(tagName);
  //Grundgerüst für createElement
  const { children, ...otherProps } = props;
  //props sind alles andere als children
  Object.assign(element, otherProps);
  //children werden mit props in verbindung gebracht
  if (children) {
    //wenn es children gibt füge die childern in die children ein
    element.append(...children);
  }
  return element;
};

import "./homepage.css";
import { createElement } from "../../utils/element";
import { createTeaser } from "../../components/teaser/teaser";

export const home = () => {
  const divHomepage = createElement("div", {
    className: "divHomepage",
    children: [createTeaser()],
  });
  return divHomepage;
};

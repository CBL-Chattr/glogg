import "./homepage.css";
import { createElement } from "../../utils/element";
import { createTeaser } from "../../components/teaser/teaser";
// import { createCategoryElement } from "../../components/category/category";
import { createBottomNav } from "../../components/bottom-nav/bottom-nav";

export const home = () => {
  const divHomepage = createElement("div", {
    className: "divHomepage",
    children: [createTeaser(), /*createCategoryElement(),*/ createBottomNav()],
  });
  return divHomepage;
};

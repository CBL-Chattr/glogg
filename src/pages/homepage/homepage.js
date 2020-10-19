import "./homepage.css";
import { createElement } from "../../utils/element";
import { createTeaser } from "../../components/teaser/teaser";
import { createCategoryElement } from "../../components/category/category";
import { createBottomNav } from "../../components/bottom-nav/bottom-nav";

export const home = () => {
  const divHomepage = createElement("div", {
    className: "divHomepage",
    children: [
      createTeaser(),
      createElement("h3", {
        innerText: "Breakfast",
      }),
      createCategoryElement({
        name: "Bananabread",
        imgSrc:
          "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      }),
      createBottomNav(),
    ],
  });
  return divHomepage;
};

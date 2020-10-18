import "./category.css";
import "./category.stories.js";
import { createElement } from "../../utils/element";

export const createCategoryElement = (recipe) => {
  const categoryElement = createElement("div", {
    className: "category",
    children: [
      createElement("h3", {
        innerText: "Breakfast",
      }),
      createElement("div", {
        className: "slider",
        children: [
          createElement("img", {
            className: "recipe__image",
            src: recipe.imgSrc,
            alt: `Image of ${recipe.name}`,
          }),
          createElement("p", {
            innerText: recipe.name,
          }),
        ],
      }),
    ],
  });
  return categoryElement;
};

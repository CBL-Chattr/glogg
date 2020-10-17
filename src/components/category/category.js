import "./category.css";
import "./category.stories.js";
import { createElement } from "../../utils/element";

export const createCategoryElement = (slider) => {
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
            src: slider.imgSrc,
            alt: `Image of ${slider.recipe}`,
          }),
          createElement("p", {
            innerText: slider.recipe,
          }),
        ],
      }),
    ],
  });
  return categoryElement;
};

// const createSliderElemnt = () => {
//   SliderElemnt.src =
// }

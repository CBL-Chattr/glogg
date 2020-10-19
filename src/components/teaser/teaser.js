import "./teaser.css";
import { createElement } from "../../utils/element";

export const createTeaser = () => {
  const teaserElement = createElement("div", {
    className: "teaserCard",
    // innerText: "BG Image",
    children: [
      createElement("h1", {
        innerText: "Recipe \n of the day",
      }),
    ],
  });

  return teaserElement;
};

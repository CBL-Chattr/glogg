import "./teaser.css";
import { createElement } from "../../utils/element";

export const teaser = () => {
  const teaserElement = createElement("div", {
    className: "teaserCard",
    // innerText: "BG Image",
    children: [
      createElement("h1", {
        innerText: "Recipe of the day",
      }),
    ],
  });

  return teaserElement;
};

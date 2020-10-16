import { createElement } from "../../utils/element";
import homeSrc from "../../assets/home.svg";
import searchSrc from "../../assets/search.svg";
import listSrc from "../../assets/list.svg";
import smileSrc from "../../assets/smile.svg";
import addSrc from "../../assets/add.svg";

import "./bottom-nav.css";

export const bottomNav = () => {
  const homeElement = createElement("img", {
    src: homeSrc,
    alt: "home",
  });
  const searchElement = createElement("img", {
    src: searchSrc,
    alt: "search",
  });
  const addElement = createElement("img", {
    src: addSrc,
    alt: "add",
  });
  const listElement = createElement("img", {
    src: listSrc,
    alt: "list",
  });
  const smileElement = createElement("img", {
    src: smileSrc,
    alt: "smile",
  });

  const bottomNavElement = createElement("div", {
    className: "bottomNav",
    children: [
      createElement("button", {
        className: "bottomNav__home",
        children: [homeElement],
      }),

      createElement("button", {
        className: "bottomNav__search",
        children: [searchElement],
      }),

      createElement("button", {
        className: "bottomNav__home",
        children: [addElement],
      }),
      createElement("button", {
        className: "bottomNav__home",
        children: [listElement],
      }),
      createElement("button", {
        className: "bottomNav__home",
        children: [smileElement],
      }),
    ],
  });
  return bottomNavElement;
};

import { createCategoryElement } from "./category";

export default { title: "Components/Category" };

export const recipes = () => {
  const createBananabreadElement = {
    recipe: "Bananabread",
    imgSrc:
      "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
  };

  const createOtherElement = {
    recipe: "Other",
    imgSrc:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80",
  };

  const recipeList = [createBananabreadElement, createOtherElement];

  const container = document.createElement("section");

  recipeList.forEach((slider) => {
    const recipeElement = createCategoryElement(slider);
    container.append(recipeElement);
  });

  return container;
};

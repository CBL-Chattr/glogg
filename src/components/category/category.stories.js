import { createCategoryElement } from "./category";

export default {
  title: "Components/Category",
  parameters: { layout: "centered" },
};

export const Bananabread = () =>
  createCategoryElement({
    name: "Bananabread",
    imgSrc:
      "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
  });

// export const recipe = () => {
//   const BananaRecipe = {
//     name: "Bananabread",
//     imgSrc:
//       "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
//   };
//   const otherRecipe = {
//     name: "Other",
//     imgSrc:
//       "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80",
//   };

//   const recipeList = [BananaRecipe, otherRecipe];

//   const container = document.createElement("section");

//   recipeList.forEach((recipe) => {
//     const recipeElement = createCategoryElement(recipe);
//     container.append(recipeElement);
//   });

//   return container;
// };

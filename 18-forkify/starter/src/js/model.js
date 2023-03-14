import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (recipeID) {
  try {
    const recipeResponse = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}`
    );
    const data = await recipeResponse.json();
    if (!recipeResponse.ok)
      throw new Error(`${data.status} because ${data.message}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      coockingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    console.log(error);
  }
};

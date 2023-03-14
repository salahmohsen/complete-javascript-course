import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './Views/recipeView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const recipeID = window.location.hash.slice(1);
    if (!recipeID) return;
    recipeView.renderSpinner();
    await model.loadRecipe(recipeID);
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

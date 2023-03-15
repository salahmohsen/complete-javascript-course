import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './Views/recipeView';

const controlRecipes = async function () {
  try {
    const recipeID = window.location.hash.slice(1);
    if (!recipeID) return;
    recipeView.renderSpinner();
    await model.loadRecipe(recipeID);
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};
controlSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();

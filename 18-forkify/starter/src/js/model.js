import { async } from 'regenerator-runtime';
import { APi_URL, RESULT_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RESULT_PER_PAGE,
  },
};

export const loadRecipe = async function (recipeID) {
  try {
    const data = await getJSON(`${APi_URL}${recipeID}`);
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
    console.error(error);
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const { data } = await getJSON(`${APi_URL}?search=${query}`);
    state.search.query = query;
    state.search.results = data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  // setTimeout(() => console.log(state.recipe.ingredients), 1000);
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

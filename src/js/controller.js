import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    renderSpiner(recipeContainer);

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes)
// code below same as code above
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

import View from './View.js';
import icons from 'url:../../img/icons.svg';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');

  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
  }

  toggleWindow = function () {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  };

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow);
  }

  _generateMarkup() {}
}

export default new AddRecipeView();

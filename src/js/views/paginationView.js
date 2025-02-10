import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'Page 1';
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'Last page';
    }

    // Other pages
    if (this._data.page < numPages) {
      return 'Other pages';
    }

    // Page 1 and there are no other pages
    return 'Only 1 page';
  }
}

export default new PaginationView();

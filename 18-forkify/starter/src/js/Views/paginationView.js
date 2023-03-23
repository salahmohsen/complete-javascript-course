import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _currentPage;
  _numberOfPages;

  _nextPageButton = function () {
    return `
      <button data-gotopage="${
        this._currentPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${this._currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
  `;
  };

  _previousPageButton = function () {
    return `
    <button data-gotopage="${
      this._currentPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._currentPage - 1}</span>
    </button>
  `;
  };

  _generateMarkup() {
    this._currentPage = this._data.page;
    this._numberOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, ande there other pages
    if (this._numberOfPages > 1 && this._currentPage === 1) {
      return this._nextPageButton();
    }
    // other pages
    if (this._currentPage < this._numberOfPages && this._currentPage > 1) {
      return `${this._previousPageButton()}${this._nextPageButton()}`;
    }
    // last Page
    if (this._numberOfPages === this._currentPage) {
      return this._previousPageButton();
    }
    // page 1 and there are No other pages!
    if (this._numberOfPages === 1) {
      return '';
    }
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const button = e.target.closest('.btn--inline');
      if (!button) return;
      const goToPage = +button.dataset.gotopage;
      handler(goToPage);
    });
  }
}

export default new PaginationView();

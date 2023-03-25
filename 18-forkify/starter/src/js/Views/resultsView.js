import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = `We're sorry, we couldn't find the recipe you're looking for. Please check the spelling and try again. If you're still having trouble, you may want to search for a similar recipe.`;
  _message = '';
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join();
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    console.log(id);
    return `
        <li class="preview">
            <a class="preview__link ${
              id === result.id ? 'preview__link--active' : ''
            }" href="#${result.id}">
            <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
            </div>
            </a>
        </li>
    `;
  }
}

export default new ResultsView();

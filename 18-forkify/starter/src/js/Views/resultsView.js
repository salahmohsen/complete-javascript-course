import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = `We're sorry, we couldn't find the recipe you're looking for. Please check the spelling and try again. If you're still having trouble, you may want to search for a similar recipe.`;
  _message = '';
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join();
  }
}

export default new ResultsView();

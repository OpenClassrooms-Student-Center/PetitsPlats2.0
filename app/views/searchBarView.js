import { SetAtt } from '../utils/DOMUtil.js';

export class SearchBarView {
  constructor() {
    // DOM elements
    this.searchBar = document.querySelector('.headers__container__bar');

    this.error = 'Aucune recette ne correspond à votre critère... vous pouvez cherchez " tarte aux pommes", "poisson", etc...';
  }

  _setLabel() {
    const label = document.createElement('label');
    label.classList.add('headers__container__bar--label');
    SetAtt(label, 'for', 'search-bar');
    return label;
  }

  _setInput() {
    const input = document.createElement('input');

    input.classList.add('headers__container__bar--input')

    SetAtt(input, 'id', 'search-bar');
    SetAtt(input, 'type', 'text');
    SetAtt(input, 'maxlength', '80');
    SetAtt(input, 'placeholder', 'Rechercher une recette, un ingrédient, ...');

    return input;
  }

  _setBtnDelete(inputElement) {
    const btnDelete = document.createElement('button');
    const btnDeleteIcon = document.createElement('i');

    btnDelete.classList.add('headers__container__bar--delete')
    btnDeleteIcon.classList.add('fa-solid', 'fa-xmark');

    SetAtt(btnDelete, 'type', 'reset');
    SetAtt(btnDelete, 'aria-label', 'Searchbar button delete');

    btnDelete.style.visibility = inputElement.value.length > 0 ? 'visible' : 'hidden';
    inputElement.addEventListener('input', () => {
      btnDelete.style.visibility = inputElement.value.length > 0 ? 'visible' : 'hidden';
    });
    btnDelete.addEventListener('click', () => {
      inputElement.value = '';
      btnDelete.style.visibility = 'hidden';
    });

    btnDelete.append(btnDeleteIcon);
    return btnDelete;
  }

  _setBtnSearch() {
    const btnSearch = document.createElement('button');
    const iconSearch = document.createElement('i');

    btnSearch.classList.add('headers__container__bar--research');
    iconSearch.classList.add('fa-solid', 'fa-magnifying-glass');

    SetAtt(btnSearch, 'type', 'submit');
    SetAtt(btnSearch, 'aria-label', 'Searchbar button research');

    btnSearch.appendChild(iconSearch);
    return btnSearch;
  }

  displaySearchBar() {
    const label = this._setLabel();
    const input = this._setInput();
    const btnDelete = this._setBtnDelete(input);
    const btnSearch = this._setBtnSearch();

    this.searchBar.append(label, input, btnDelete, btnSearch);
    return this.searchBar;
  }
}

export default class searchView {
  constructor() {
    this.searchInput = this.getElement('.search__input')
    this.recipeList = this.getElement('.recipe__list')
    this.searchButton = this.getElement('.search__button')
  }

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }


  getInput() {
    return this.searchInput.value;
  }

  clearInput() {
    console.log('inside clearInput')
    this.searchInput.value = ''
  }

  clearRecipeList() {
    this.recipeList.innerHTML = '';
  };

  clearDOM() {
    this.clearRecipeList()
    this.clearInput()
  }

  setupSearchButton(handler)  {
    this.searchButton.addEventListener('click',handler)
  }
  
}


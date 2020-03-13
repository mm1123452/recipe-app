export default class searchView {
  constructor() {
    this.searchInput = this.getElement('.search__input')
    this.recipeList = this.getElement('.recipe__list')
    this.searchButton = this.getElement('.search__button')
    this.recipeDetail = this.getElement('.recipe__detail')

    this.renderRecipeList =  this.renderRecipeList.bind(this)
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

  renderRecipeToDOM(recipe) {
    if(recipe) {
      let listItem = `
        <li id=${recipe.idMeal} class="recipe__list-item">
          <a class="recipe__link">${recipe.strMeal}</a>
        </li>`     
      this.recipeList.insertAdjacentHTML('beforeend',listItem)
    }
  }

  renderRecipeList(recipes) {
    if (recipes && recipes.length > 0) {
      recipes.forEach(recipe => {
        this.renderRecipeToDOM(recipe)
      })
    } else {
      console.log('error')
      this.renderNotification('info')
    }
  }

  clearNotification () {
    this.recipeDetail.innerHTML = '';
  }

  renderNotification(type) {
    let message = type === 'info' ? `Sorry, couldn't find a recipe with that ingredient. Try again`:
      `Sorry, there was an error making your request. Try again`      

    let notification = `
      <div class="notification notification_type_${type}">
        <p class="notification__text">${message}</p>
      </div>`
    this.recipeDetail.insertAdjacentHTML('afterbegin',notification)    
  }

  setupSearchButton(handler)  {
    this.searchButton.addEventListener('click',handler)
  }  

  setupRecipeSelectButton(handler)  {
    this.recipeList.addEventListener('click',handler)
  } 
}


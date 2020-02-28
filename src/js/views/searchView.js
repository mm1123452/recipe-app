const searchInput = document.querySelector('.search__input');
const recipeList = document.querySelector('.recipe__list')
const recipeDetail = document.querySelector('.recipe__detail')
export const searchButton = document.querySelector('.search__button')

export const getInput = () => searchInput.value;

export const clearInput = () => {
    searchInput.value = '';
};

export const clearRecipeList = () => {
  recipeList.innerHTML = '';
};

export const clearNotification = () => {
  recipeDetail.innerHTML = '';
};

export const renderNotification = (type) => {
  let message = type === 'info' ? `Sorry, couldn't find a recipe with that ingredient. Try again`:
    `Sorry, there was an error making your request. Try again`      

  let notification = `
    <div class="notification notification_type_${type}">
      <p class="notification__text">${message}</p>
    </div>`
  recipeDetail.insertAdjacentHTML('afterbegin',notification)    
}

const renderRecipeList = (recipe) => {
  if(recipe && recipeList) {
    let listItem = `
      <li class="recipe__list-item">
        <a class="recipe__link">${recipe.strMeal}</a>
      </li>`
      
    recipeList.insertAdjacentHTML('beforeend',listItem)
  }
  
}

export const populateRecipeList = (recipes) => {
  console.log('recipes', recipes)

  if (recipes && recipes.length > 0) {
    recipes.forEach(recipe => {
      console.log('inside for each', recipe)
      renderRecipeList(recipe)
    })
  } else {
      renderNotification('info')
  }
}
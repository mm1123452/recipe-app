import Search from './models/search'
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/recipe';
export const state = {}

export const selectMealById = (state,id) => {
    if (state) {
        return state.search.result.meals.find(item => item.idMeal === id)
    }
    
}

export const searchController = async () => {
    searchView.clearNotification()
    const input = searchView.getInput()
    const trimmedInput = input.trim()
    console.log(input)

    if (trimmedInput !== '') {
      state.search = new Search(trimmedInput)

      try {
        await state.search.getRecipeList();
        searchView.clearInput()
        searchView.clearRecipeList()
        searchView.populateRecipeList(state.search.result.meals)
        
        console.log(state)
        } catch (err) {
            searchView.renderNotification('error')
        }
    }
}

export const recipeController = (id) => {
    const meal = selectMealById(state,id) 
    console.log('meal inside controller')   
    console.log(meal)   
    state.recipe = new Recipe(meal)
    state.recipe.prepWork()
    recipeView.clearRecipe()
    recipeView.populateDom(state.recipe)
    console.log(state)    
}

//EVENT LISTENERS
if(searchView.searchButton) {
    searchView.searchButton.addEventListener('click', e => {
        e.preventDefault();
        searchController();
    });
}

if (searchView.recipeList) {
    searchView.recipeList.addEventListener('click', e => {
        let id
        //if the element clicked doesn't have an id (a), get it from the parent (li)
         if (e.target && e.target.id) {
           id = e.target.id
         } else {
            const parentEl= e.composedPath().find(item => item.id ? item.id:null)
            id = parentEl.id
         }
        recipeController(id)    
    })
}




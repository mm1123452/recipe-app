import Search from './models/search'
import * as searchView from './views/searchView';
export const state = {}

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

if(searchView.searchButton) {
    searchView.searchButton.addEventListener('click', e => {
        e.preventDefault();
        searchController();
    });
}
import searchView from '../src/js/views/searchView'

describe('searchview', ()=>{
  let view;

  beforeEach(() => {
    jest.clearAllMocks();
  
    document.body.innerHTML += `
      <form class="search">
        <input value="pasta" class="search__input" type="text"  autofocus>
        <button class="button search__button">Search</button>
      <form>
      <div class="recipe">
        <ul class="recipe__list">
          <li>Item</li>
        </ul>    
        <div class="recipe__detail"> </div>
      </div>
    `
    view = new searchView(); 
  });

  it('is exist', () => {
    expect(view instanceof searchView).toBe(true)
  })

  it('returns element when getElement is called', () => {
    let searchInput = view.getElement('.search__input')
    let recipeList = view.getElement('.recipe__list')
    let searchButton = view.getElement('.search__button')

    expect(searchInput.nodeName).toBe("INPUT")
    expect(recipeList.nodeName).toBe("UL")
    expect(searchButton.nodeName).toBe("BUTTON")
  })

  it('returns the input when getInput method is called', () => {
    expect(view.getInput()).toBe("pasta")
  })

  it('clears the input when clearInput method is called', () => {
    view.clearInput()
    expect(view.getInput()).toBe("")
  })

  it('clears the recipeList section when clearRecipeList method is called', () => {
    let recipeListLength = view.getElement('.recipe__list').children.length
    expect(recipeListLength).toBe(1)
    view.clearRecipeList()

    let expectedLength = view.getElement('.recipe__list').children.length
    expect(expectedLength).toBe(0)
  })

  it('calls the clearRecipeList and the clearInput method when clearDOM is called', () => {
    let clearRecipeSpy = jest.spyOn(view, 'clearRecipeList')
    let clearinputSpy = jest.spyOn(view, 'clearInput')
    view.clearDOM()
  
    expect(clearRecipeSpy).toHaveBeenCalled()
    expect(clearinputSpy).toHaveBeenCalled()
  })

  it('adds eventlistener to the search button when setupSearchButton is called', () => {
    let searchButton = view.getElement('.search__button')
    let spy = jest.spyOn(searchButton,'addEventListener')
    let mockHandler = jest.fn()

    view.setupSearchButton(mockHandler)

   expect(spy).toHaveBeenCalledWith('click', mockHandler)
  })

})


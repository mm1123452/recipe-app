import * as view from '../src/js/views/searchView'

describe('search View', () => {
  beforeEach(() => {
    document.body.innerHTML += `
      <form class="search">
        <input value="pasta" class="search__input" type="text"  autofocus>
        <button class="button search__button">Search</button>
      <form>
    `;
    });

    afterEach(() => {
      jest.restoreAllMocks()
    })

  it('returns the input value when getInput() is called ', () => {
   const searchInput = document.querySelector('.search__input')

    view.getInput = jest
      .fn()
      .mockReturnValue(  searchInput.value);

    const data = view.getInput()

    expect(data).toBe('pasta')  
  })

  it('clears the input value when clearInput() is called ', () => {
    const searchInput = document.querySelector('.search__input')

     expect(searchInput.value).toBe('pasta')
     view.clearInput = jest
       .fn()
       .mockImplementationOnce(  searchInput.value = '');
         
       view.clearInput()
 
       expect(searchInput.value).toBe('')  
  })

  it('clears the recipe list clearRecipeList() is called ', () => {
    document.body.innerHTML += `
      <ul class="recipe__list">
        <li class="recipe__list-item">
          <a class="recipe__link">Tomato</a>
        </li>
      </ul>`;
    
    const recipeList = document.querySelector('.recipe__list')

    expect(recipeList.childElementCount).toEqual(1) 

     view.clearRecipeList= jest
       .fn()
       .mockImplementationOnce(  recipeList.innerHTML = '');
         
      view.clearRecipeList()

       expect(recipeList.childElementCount).toEqual(0) 
  })

  it('clears the notifications when clearNotification() is called ', () => {
    document.body.innerHTML += ` 
      <div class="recipe__detail">    
        <div class="recipe__header">
          <img class="recipe__image" src="https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="cupcake">
          <h1 class="recipe__title">Velvet Cupcake</h1>
        </div>
      </div>`
    
    const recipeDetail = document.querySelector('.recipe__detail')

    expect(recipeDetail .childElementCount).toEqual(1) 

     view.clearNotification = jest
       .fn()
       .mockImplementationOnce(  recipeDetail.innerHTML = '');
         
      view.clearNotification()

       expect(recipeDetail.childElementCount).toEqual(0) 
  })

  it('renders a notification when renderNotification() is called ', () => {
    document.body.innerHTML += ` 
      <div class="recipe__detail">    
      </div>`
    
    const recipeDetail = document.querySelector('.recipe__detail')

    expect(recipeDetail.childElementCount).toEqual(0) 

      view.renderNotification = jest
        .fn()
        .mockImplementationOnce(type =>
          recipeDetail.insertAdjacentHTML('afterbegin',
              `<div class="notification notification_type_${type}">
                <p class="notification__text">Sorry, there was an error making your request. Try again</p>
              </div>`
          )
        )  
        .mockImplementationOnce(type =>
          recipeDetail.insertAdjacentHTML('afterbegin',
              `<div class="notification notification_type_${type}">
                <p class="notification__text">Sorry, couldnt find a recipe with that ingredient. Try again</p>
              </div>`
          )
        ) 

    view.renderNotification('error')
    expect(recipeDetail.childElementCount).toEqual(1)
    expect(document.querySelector('.notification__text').textContent).toEqual('Sorry, there was an error making your request. Try again') 
    view.renderNotification('info')
    expect(document.querySelector('.notification__text').textContent).toEqual('Sorry, couldnt find a recipe with that ingredient. Try again') 
  })

  it('inserts recipe items when renderRecipeList() is called ', () => {
    document.body.innerHTML += `<ul class="recipe__list"></ul>`;
  
    const recipeList = document.querySelector('.recipe__list')

    const recipes = [{"idMeal": 1, "strMeal":"Roasted Eggplant"},{"idMeal": 2, "strMeal":"Stovetop Eggplant"}]
    
    view.renderRecipeList = jest
       .fn()
       .mockImplementation( recipe => {
         recipeList.insertAdjacentHTML('beforeend',`
          <li class="recipe__list-item">
            <a class="recipe__link">${recipe.strMeal}</a>
          </li>`)
       });
 
      view.renderRecipeList(recipes[0])
      expect(view.renderRecipeList).toHaveBeenCalled()
      expect(document.querySelector('.recipe__link').textContent).toBe('Roasted Eggplant') 
  })

  it('calls renderRecipeList when populateRecipeList() is called ', () => {
    document.body.innerHTML += `<ul class="recipe__list"></ul>`;

    const recipes = [{"idMeal": 1, "strMeal":"Roasted Eggplant"},{"idMeal": 2, "strMeal":"Stovetop Eggplant"}]
    
    const spy = jest.spyOn(view,'renderRecipeList')

    const RecipeList = jest.spyOn(view,'populateRecipeList')
 
    view.populateRecipeList(recipes)

    expect(spy).toHaveBeenCalled()
    expect(RecipeList).toHaveBeenCalledWith(recipes);
  })

})
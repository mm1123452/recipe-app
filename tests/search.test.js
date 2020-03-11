import Search from '../src/js/models/search'
import * as api from '../src/js/api/theMealDb.js'

jest.mock('../src/js/api/theMealDb.js', () => {
  return {
    getData:jest.fn().mockReturnValue(Promise.resolve(
      {meals:  [{idMeal: "5",strMeal:"Pasta" }]}     
    )),
  }
})

describe('search', ()=>{
  let model;

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
    model = new Search(); 
  });

  it('is exist', () => {
    expect(model instanceof Search).toBe(true)
  })

  it('is calls getData function when getRecipeList is called', async () => {
    let dataSpy = jest.spyOn(api, 'getData')
    await model.getRecipeList('pasta')

    expect(dataSpy).toHaveBeenCalledWith('pasta')
  })

  it('updates recipes with list of recipes if getData is successful', async () => {
    const expectedData =  {meals:  [{idMeal: "5",strMeal:"Pasta" }]}   
    await model.getRecipeList('pasta')

    expect(model.recipes).toEqual(expectedData )
  })


  it("should throw error if  getData is unsuccessful", async () => {
    jest.spyOn(api, "getData").mockReturnValue(Promise.reject({error:'error'}))
    try {
      await model.getRecipeList('pasta');
    } catch (e) {
      expect(e).toEqual({error:'error'})
    } 
  });

})


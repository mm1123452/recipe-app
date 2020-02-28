import Search from '../src/js/models/search'
import * as searchView from '../src/js/views/searchView';
import * as controller from '../src/js/index';

jest.mock("../src/js/views/searchView")
jest.mock("../src/js/models/search")
jest.mock('../src/js/index'), () => {
  return {
    state: jest.fn(() => {})
  }
}
describe('searchController', () => {
    let emit;
    let search;
    let state = {};

    beforeAll(() => {
      ({ emit } = window._virtualConsole);
    });
  
    beforeEach(() => {
      jest.restoreAllMocks();
  
      window._virtualConsole.emit = jest.fn();

      state = {
        search: new Search('pasta')
      }
    
      jest.spyOn(state.search, "getRecipeList").mockReturnValue(Promise.resolve(
        {meals:  [{idMeal: "5",strMeal:"Pasta" }]}     
      )),
      jest.spyOn(searchView, "clearNotification")
      jest.spyOn(searchView, "getInput").mockImplementation(() => 'pasta');
      jest.spyOn(searchView,'clearInput')
      jest.spyOn(searchView,'clearRecipeList')
      jest.spyOn(searchView,'populateRecipeList')

    });
  
    afterAll(() => {
      window._virtualConsole.emit = emit;
    });

  it('calls searchController()', () => {
    const spy = jest.spyOn(controller, 'searchController');
    controller.searchController()
    expect(spy).toHaveBeenCalled()
  })

  it('should clear existing items', () => {  
    controller.searchController()
    expect(searchView.clearNotification).toHaveBeenCalled()
  })

  it('should get text from input', () => {
    controller.searchController()
    expect(searchView.getInput).toHaveBeenCalled()
    expect(searchView.getInput()).toEqual('pasta')
  })

  it('should instantiate a Search Object', async () => {
    controller.searchController()
    expect(state.search instanceof Search).not.toBeNull();
  })

  it('should call clear input', () => {
    controller.searchController() 
    expect(searchView.clearInput).toHaveBeenCalled()
  })

  it('should call clearRecipe list', () => {
    controller.searchController() 
    expect(searchView.clearRecipeList).toHaveBeenCalled()
  })
})


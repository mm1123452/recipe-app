import Search from '../src/js/models/search'
import * as api from '../src/js/api/theMealDb.js'

jest.mock('../src/js/api/theMealDb.js', () => {
  return {
    getData:jest.fn().mockReturnValue(Promise.resolve(
      {meals:  [{idMeal: "5",strMeal:"Pasta" }]}     
    )),
  }
})
describe('search ', () => {
  let search

  beforeEach(() => {
    search = new Search('pasta')
    jest.restoreAllMocks();
  })

  it('exist', () => {
    expect(search instanceof Search).not.toBeNull();
  })

  it('constructs a Search with input provided', () => {
    expect(search).toEqual({input:'pasta'})
  })

  describe("getRecipeList()", () => {
    it("should get data", async () => {
      jest.spyOn(api, "getData")
      await search.getRecipeList();
      expect(api.getData).toHaveBeenCalled();
      expect(search.result).toEqual({meals:  [{idMeal: "5",strMeal:"Pasta" }]} )
    });

    it("should throw error if request is rejected", async () => {
      jest.spyOn(api, "getData").mockReturnValue(Promise.reject({error:'error'}))
      try {
        await search.getRecipeList();
      } catch (e) {
        expect(e).toEqual({error:'error'})
      } 
      expect(api.getData).toHaveBeenCalled();
    });

  });
})


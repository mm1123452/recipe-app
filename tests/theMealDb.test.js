import * as api from '../src/js/api/theMealDb.js'
jest.mock('node-fetch');
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');

describe('getData', () => {
  it('getData calls fetch with the right args and returns recipe array', async () => {
  const data =  {meals:  [{idMeal: "5",strMeal:"Pasta" }]}
  const query ='pasta'
  fetch.mockReturnValue(Promise.resolve(new Response( 
    JSON.stringify({
      meals:  [{idMeal: "5",strMeal:"Pasta" }]
    })
  )));

  const recipeArray = await api.getData(query);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  expect(recipeArray).toMatchObject(data);
  })
})



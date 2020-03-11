import {getData} from '../api/theMealDb.js'

export default class Search {
  constructor() {
    this.recipes = {};
   }

  async getRecipeList(input) {
    try {
      const results = await getData(input)
      this.recipes = {...this.recipes,...results}
    } catch (error) {
      throw(error);
    }
  }
}




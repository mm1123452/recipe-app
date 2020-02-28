import {getData} from '../api/theMealDb.js'

export default class Search {
  constructor(input) {
    this.input = input;
  }

  async getRecipeList() {
    try {
      this.result = await getData(this.input)
      console.log(this.result);
  } catch (error) {
      throw(error);
    }
  }
}


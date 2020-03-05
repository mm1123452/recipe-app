export default class Recipe {
  //TODO REMOVE INSTRUCTION
  constructor({idMeal,strMeal,strInstructions,strMealThumb,...rest}) {
    this.id = idMeal;
    this.title = strMeal;
    this.instructions = strInstructions;
    this.image = strMealThumb;
    this.rest = rest;
  }

  prepIngredients() {
    let ingredientsArray = [] 

    for (let i = 1; i < 20; i++) {
      let measurement  = this.rest[`strMeasure${i}`]
      let ingredient = this.rest[`strIngredient${i}`] 

      if (measurement && ingredient) {
          ingredientsArray.push(`${measurement} ${ingredient}`)
      }          
    }
    this.ingredients = ingredientsArray;
  }

  prepInstructions() {
    this.instructionArray = this.instructions.split('.');
  }

  prepWork() {
      this.prepIngredients()
      this.prepInstructions()
  }
}

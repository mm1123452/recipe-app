import Recipe from '../src/js/models/recipe'

describe('Recipe ', () => {
    let recipe
    let recipeObj = {
        idMeal: "1234",
        strMeal: "Chicken pasta",
        strInstructions: "Take large pot of water. Season chicken.",
        strMealThumb:"https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
        strIngredient1:"Chicken",
        strIngredient2:"Onion",
        strMeasure1:"1.2 kg",
        strMeasure2:"5 thinly Slice",
        strIngredient3:"",
        strMeasure3:"",
        strIngredient4:"",
        strMeasure4:"",
        strIngredient5:"",
        strMeasure5:"",
        strIngredient6:"",
        strMeasure6:"",
        strIngredient7:"",
        strMeasure7:"",
        strIngredient8:"",
        strMeasure8:"",
        strIngredient9:"",
        strMeasure9:"",
        strIngredient10:"",
        strMeasure10:"",
        strIngredient11:"",
        strMeasure11:"",
        strIngredient12:"",
        strMeasure12:"",
        strIngredient13:"",
        strMeasure13:"",
        strIngredient14:"",
        strMeasure14:"",
        strIngredient15:"",
        strMeasure15:"",
        strIngredient16:"",
        strMeasure16:"",
        strIngredient17:"",
        strMeasure17:"",
        strIngredient18:"",
        strMeasure18:"",
        strIngredient19:"",
        strMeasure19:"",
        strIngredient20:"",
        strMeasure20:""
    }
    beforeEach(() => {
      recipe = new Recipe(recipeObj)
      jest.restoreAllMocks();
    })
  
    it('exist', () => {
      expect(recipe instanceof Recipe).not.toBeNull();
    })

    it('initialized object with correct values', () => {
        let expectedRecipe = { 
            id: "1234",
            title: "Chicken pasta",
            instructions: "Take large pot of water. Season chicken.",
            image:"https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg"}
       
        expect(recipe.id).toEqual(expectedRecipe.id);
        expect(recipe.title).toEqual(expectedRecipe.title);
        expect(recipe.instructions).toEqual(expectedRecipe.instructions);
        expect(recipe.image).toEqual(expectedRecipe.image);
        expect(typeof recipe.rest).toBe("object")
    })

    describe("prepInstructions()", () => {
        it("should create an instruction array", () => {
          let expectedArray = ["Take large pot of water"," Season chicken",""]
          recipe.prepInstructions();
          expect(recipe.instructionArray).toEqual(expectedArray)
        });
    })

    describe("prepIngredients()", () => {
        it("should create an ingredient array", () => {
          let expectedArray = ["1.2 kg Chicken","5 thinly Slice Onion"]
          recipe.prepIngredients();
          expect(recipe.ingredients).toEqual(expectedArray)
        });
    })

    describe("prepWork()", () => {
        it("should call prepIngredients and prepInstructions", () => {
            jest.spyOn(recipe, "prepIngredients")
            jest.spyOn(recipe, "prepInstructions")
            recipe.prepWork();
          expect(recipe.prepIngredients).toHaveBeenCalled()
        });
    })
})  
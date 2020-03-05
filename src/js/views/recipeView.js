const recipeDetailSection = document.querySelector('.recipe__detail');
const recipeIngredientsSection = document.querySelector('recipe__ingredients');


export const clearRecipe = () => {
    recipeDetailSection.innerHTML = '';
  };
  
  const populateHeaderDom = (imageSrc,title) => {
    if(imageSrc) {
      let header = `
        <div class="recipe__header">
          <img class="recipe__image" src=${imageSrc} alt=${title}>
          <h1 class="recipe__title">${title}</h1>
        </div>`
        
      recipeDetailSection.insertAdjacentHTML('afterbegin',header)
    }   
  }
   
  const populateColumnsDom = () => {
    let columns = `   
      <div class="columns">
        <div class="recipe__prep">
          <div class="recipe__ingredient-info">
            <h2 class="heading">Ingredients</h2>
            <ul class="recipe__ingredients">
            </ul>
          </div>
        </div>

        <div class="recipe__procedure">
         <h2 class="heading">Procedure</h2>
        </div>
      </div>` 

    recipeDetailSection.insertAdjacentHTML('beforeend',columns)             
  }
    
  const populateIngredientsDom = (ingredients) => {
    const recipeIngredient= document.querySelector('.recipe__ingredients')

    let ingredientList=''

    if(ingredients) {
      ingredients.forEach(ingredient => {
        ingredientList+= `<li>${ingredient}</li> `
      })
      recipeIngredient.insertAdjacentHTML('afterbegin',ingredientList)
    }   
  }

  const populateInstructionsDom = (instructions) => {
    const recipeProcedure = document.querySelector('.recipe__procedure')

    let instructionList=''

    if(instructions) {
      instructions.forEach((instruction,index)=> {
       
        let digits = (index < 9) ? '0' + (index + 1).toString() : (index + 1).toString();
      
        if(instruction.trim() !== '') {
          instructionList += `
          <div class="recipe__procedure-step">
            <span class="recipe__procedure-num">${digits}</span>
            <p class="recipe__procedure-text">${instruction}</p>
          </div>`
        }
      })
      recipeProcedure.insertAdjacentHTML('beforeend',instructionList)
    }   
  }

  export const populateDom = ({title,instructionArray,image,ingredients}) => {
    populateHeaderDom(image, title)
    populateColumnsDom()
    populateIngredientsDom(ingredients)
    populateInstructionsDom(instructionArray)
  }
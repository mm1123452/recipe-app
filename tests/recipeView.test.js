import * as view from '../src/js/views/recipeView'

describe('recipe View', () => {
    beforeEach(() => {
        document.body.innerHTML += `
            <div class="recipe">  
                <div class="recipe__detail"> 
                    <div class="recipe__header"> </div>
                    <div class="columns"> </div>
                </div>
            </div>
        `;

        Object.defineProperty(global, 'document', {});
    });

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('clears recipeDetailSection when called', () => {
        const recipeDetail = document.querySelector('.recipe__detail')
     
        expect(recipeDetail.children.length).toBe(2) 

         view.clearRecipe = jest
           .fn()
           .mockImplementationOnce(  recipeDetail.innerHTML = '');
     
         view.clearRecipe()
     
         expect(recipeDetail.children.length).toBe(0)  
    })

})
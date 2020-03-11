export default class SearchController {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.handleSearch =  this.handleSearch.bind(this)
  }

  init() {
    console.log('inside init')
    this.view.setupSearchButton(this.handleSearch)
  }

  async handleSearch(e)  {
    e.preventDefault()
    console.log('button clicked')
    console.log('this.model',this.model)
    console.log('this.view',this.view)

    let input = this.view.getInput()
    console.log('input', input)
    const trimmedInput = input.trim()

    if (trimmedInput !== '') {
      try {
        await this.model.getRecipeList(trimmedInput);
        this.view.clearDOM()
        } catch (err) {
        }
    }
  }

}
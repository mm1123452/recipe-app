import Search from '../src/js/models/search';
import searchView from '../src/js/views/searchView';
import SearchController from '../src/js/controllers/searchController';

jest.mock('../src/js/views/searchView')
jest.mock('../src/js/models/search')

describe('app', ()=>{
  let controller;
  let view;
  let model;

  beforeEach(() => {
    jest.clearAllMocks();
    view = new searchView();
    model = new Search();
    controller =  new SearchController(model,view);
  });

  it('is should instantiate a search controller', () => {
    expect(controller instanceof SearchController).not.toBeNull()
  })

  it('is should call setupSearchButton function', () => {
    jest.spyOn(view,"setupSearchButton")
    controller.init()
    expect(view.setupSearchButton).toHaveBeenCalled()
  })

  describe('handleSearch', async () => {
    let event
    beforeEach(() => {
      jest.clearAllMocks();
      event = {preventDefault: jest.fn()}
    });

    it('is should call getInput() function', () => {
      controller.handleSearch(event)
      jest.spyOn(view,"getInput")
      expect(view.getInput).toHaveBeenCalled()
    })
  })
})


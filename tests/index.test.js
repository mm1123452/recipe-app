import Search from '../src/js/models/search';
import searchView from '../src/js/views/searchView';
import SearchController from '../src/js/controllers/searchController';

jest.mock('../src/js/views/searchView')
jest.mock('../src/js/models/search')

describe('app', ()=>{
  let app;
  let view;
  let model;

  beforeEach(() => {
    jest.clearAllMocks();
    view = new searchView();
    model = new Search();
    app =  new SearchController(model,view);
  });

  it('is should instantiate a search controller', () => {
    expect(app instanceof SearchController).not.toBeNull()
  })

  it('is should call init function', () => {
    jest.spyOn(app,"init")
    app.init()
    expect(app.init).toHaveBeenCalled()
  })
})










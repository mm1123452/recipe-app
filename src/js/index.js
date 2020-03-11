import '../sass/main.scss';
import Search from './models/search';
import searchView from './views/searchView';
import SearchController from './controllers/searchController';

const app = new SearchController(new Search(), new searchView())
app.init()





import Homepage from './pages/homepage/homepage.component';
import CategoryPage from './pages/category-page/category-page.component';
import { Switch, Route } from 'react-router-dom';
import BurgerMenu from './components/burger-menu/burger-menu.component';
import LeftMenu from './components/left-menu/left-menu.component';
import Fonts from './components/fonts/fonts.component';
import ProductPage from './pages/product-page/product-page.component';
import Search from './pages/search/search.component';
import Basket from './pages/basket/basket.component';
import SignIn from './pages/signin/signin.component';

const App = () => {
  return (
    <div className="App">
      <Fonts />
      <BurgerMenu />
      <LeftMenu>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/:categoryPath">
            <CategoryPage />
          </Route>
          <Route path="/:categoryPath/:productId">
            <ProductPage />
          </Route>
        </Switch>
      </LeftMenu>
    </div>
  );
}

export default App;
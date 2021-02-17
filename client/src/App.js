import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { signInSuccess } from './redux/auth/auth.actions';
import { startFetchCategories } from './redux/categories/categories.actions';
import CustomSpinner from './components/custom-spinner/custom-spinner';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const CategoryPage = lazy(() => import('./pages/category-page/category-page.component'));
const BurgerMenu = lazy(() => import('./components/burger-menu/burger-menu.component'));
const LeftMenu = lazy(() => import('./components/left-menu/left-menu.component'));
const Fonts = lazy(() => import('./components/fonts/fonts.component'));
const ProductPage = lazy(() => import('./pages/product-page/product-page.component'));
const Search = lazy(() => import('./pages/search/search.component'));
const  Basket = lazy(() => import('./pages/basket/basket.component'));
const SignIn = lazy(() => import('./pages/signin/signin.component'));
const AdminPage = lazy(() => import('./pages/admin-page/admin-page.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchCategories());
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (token && expiryDate && expiryDate > Date.now()) {
      dispatch(signInSuccess(token));
    }
  }, [startFetchCategories, signInSuccess]);

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<CustomSpinner />}>
          <Fonts />
          <BurgerMenu />
          <LeftMenu>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/search" component={Search} />
              <Route path="/basket" component={Basket} />
              <Route path="/signin" component={SignIn} />
              <Route path="/admin" component={AdminPage} />
              <Route exact path="/:categoryPath" component={CategoryPage} />
              <Route path="/:categoryPath/:productId" component={ProductPage} />
            </Switch>
          </LeftMenu>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
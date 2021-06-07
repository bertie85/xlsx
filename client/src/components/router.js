import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
)

const PageNotFound = () => (<h3>The page <code>{window.location.pathname}</code> does not exist.</h3>);

export default Router;

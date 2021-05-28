import { Switch, Route } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
// Layout
import Layout from './Layout/Layout';
// Pages
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Switch>
         <Route path='/'>
          <Home />
        </Route>
        {/*<Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
// Layout
import Layout from './Layout/Layout';
// Pages
import Home from './pages/Home';
import ProgressTracking from './pages/ProgressTracking';

function App() {
  return (
    <Layout>
      <Switch>
         <Route exact path='/'>
          <Home />
        </Route>
         <Route exact path='/progress-tracking'>
          <ProgressTracking />
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

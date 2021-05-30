import { Switch, Route } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
// Layout
import Layout from './Layout/Layout';
// Pages
import Home from './pages/Home';
import ProgressTracking from './pages/ProgressTracking';
import StudentInfo from './pages/StudentInfo';

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
         <Route exact path='/student-info'>
          <StudentInfo />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

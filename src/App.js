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
import Parent from './pages/Parent';
import Message from './pages/Message';

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
         <Route exact path='/parent'>
          <Parent />
        </Route>
         <Route exact path='/message'>
          <Message />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

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
import LearningPath from './pages/LearningPath';
import LearningDetails from './pages/LearningDetails';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path='/progress-tracking'>
        <Layout>
          <ProgressTracking />
        </Layout>
      </Route>
      <Route exact path='/student-info'>
        <Layout>
          <StudentInfo />
        </Layout>
      </Route>
      <Route exact path='/parent'>
        <Layout>
          <Parent />
        </Layout>
      </Route>
      <Route exact path='/message'>
        <Layout>
          <Message />
        </Layout>
      </Route>
      <Route exact path='/learning-path'>
        <Layout>
          <LearningPath />
        </Layout>
      </Route>
      <Route exact path='/learning-details'>
        <Layout>
          <LearningDetails />
        </Layout>
      </Route>
      <Route exact path='/login'>
          <Login />
      </Route>
    </Switch>
  );
}

export default App;

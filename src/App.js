import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';

import store from './store';
import './sass/main.scss'

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import CreatePost from './containers/CreatePost';
import ListPosts from './containers/ListPosts';
import LandingPage from './containers/LandingPage';
import ViewPost from './containers/ViewPost';
import PrivateRoute from './utils/PrivateRoute';
import UpdatePost from './containers/UpdatePost';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavigationBar/>
          <Switch>
            
            <Route exact path="/" component={ LandingPage }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/signup" component={ SignUp }/>
            <Route exact path="/posts" component={ ListPosts }/>
            <PrivateRoute exact path="/blog/post/create" component={ CreatePost }/>
            <PrivateRoute exact path="/blog/post/update/:id" component={ UpdatePost}/>
            <Route exact path="/blog/post/:id" component={ ViewPost }/>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </Provider> 
    </div>
  );
}

export default App;

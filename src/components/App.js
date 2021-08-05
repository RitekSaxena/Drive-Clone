import React from 'react'
import Signup from './authentication/Signup';
import Profile from './authentication/Profile'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'
import Dashboard from './drive/Dashboard'
import {AuthProvider} from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './drive/Navbar';
function App() {
  return ( 
      <Router>
      <AuthProvider>
        <Navbar/>
<Switch>
<PrivateRoute exact path="/" component={Dashboard}/>
<PrivateRoute exact path="/folder/:folderId" component={Dashboard}/>
<PrivateRoute  path="/update-profile" component={UpdateProfile}/>
<PrivateRoute path="/user" component={Profile}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/login" component={Login}/>
  <Route path="/forgot-password" component={ForgotPassword}/>
</Switch>
    </AuthProvider>
    </Router>

    
  );
}

export default App;

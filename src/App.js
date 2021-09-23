import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePageComponent from './components/Home';
import './App.css';
import LoginUserComponent from './components/user/LoginUserComponent';
import AboutComponent from './components/AboutComponent';
import AcademicsComponent from './components/AcademicsComponent';
import ContactComponent from './components/ContactComponent';
import InfraStructureComponent from './components/InfrastructureComponent';
import RegisterAdminComponent from './components/admin/RegisterAdminComponent';

function App() {
  return (
    <div>
       <Router>
            <Switch>
              <Route path="/" exact component={HomePageComponent}/>
              <Route path="/api/signin" component={LoginUserComponent}/>
              <Route path="/api/signup/admin" component={RegisterAdminComponent}/>
              <Route path="/about" component={AboutComponent}/>
              <Route path="/academics" component={AcademicsComponent}/>
              <Route path="/contact" component={ContactComponent}/>
              <Route path="/infrastructure" component={InfraStructureComponent}/>
            </Switch>
       </Router>
    </div>
  );
}

export default App;

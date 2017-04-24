//import dependancies
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
//import custom components
import App from '../imports/ui/App.jsx';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';
import Cookies from '../imports/ui/Cookies';
import Help from '../imports/ui/Help';

// inject tap event function into project
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//runs files in the client - initial react render method to import app component
//targets id in DOM
//routes are handled at render level
//browser history gives app knowledge of browsing location
//routing
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/new" component={New}/>
      <Route path="/cookies" component={Cookies}/>
      <Route path="/help" component={Help}/>
      <Route path="*" component={Lost}/>
    </Router>
  ), document.getElementById('render-target'));
});

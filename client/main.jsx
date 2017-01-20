//inject dependancies
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../imports/ui/App.jsx';

// inject tap event function into project
injectTapEventPlugin();

//runs files in the client - initial react render method to import app component
//targets id in DOM
Meteor.startup(() => {
    render(
        <App/>, document.getElementById('render-target'));
});

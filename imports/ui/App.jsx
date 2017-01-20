//inject dependancies
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

//import components
import Roster from './Roster';
import Monster from './Monster';
import MonsterStats from './MonsterStats';

//create DOM component

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar title="Monster Application" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false}/>
                    <div className="row">
                        <div className="col s12 m7"><Monster/></div>
                        <div className="col s12 m5"><MonsterStats/></div>
                        <div className="col s12 m5"><Roster/></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

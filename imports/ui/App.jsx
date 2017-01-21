//inject dependancies
import React, {Component, PropTypes} from 'react';
//import mui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/list';
import Divider from 'material-ui/Divider';
//holds state
import {createContainer} from 'meteor/react-meteor-data';
//button tp link to route of new monster form
import {Link} from 'react-router';

//Database - collection
import {Monsters} from '../api/monsters.js';

//import custom components
import Roster from './Roster';
import MonsterStats from './MonsterStats';
import Monster from './Monster';
//import login component
import AccountsWrapper from './AccountsWrapper';

//create DOM Component
export class App extends Component {
    //constructor creates object from class
    constructor(props) {
        super(props);
        //setting the state
        this.state = {
            monsters: []
        };
    }

    //take list of monster & map to a component
    //return rsoter component with key and monster object
    //props is the state from array
    renderMonsters() {
        return this.props.monsters.map((monster) => (<Roster key={monster._id} monster={monster}/>));
    }
    //renders tp html file
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar title="Monster Application" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false}> <AccountsWrapper/> </AppBar>
                    <div className="row">
                        <div className="col s12 m7"><Monster/></div>
                        <div className="col s12 m5">
                            <h2>Monster Roster</h2>
                            <Link to="/new" className="waves-effect waves-light btn">Add Monster</Link>
                            <Divider/>
                            <List>
                                {this.renderMonsters()}
                            </List>
                            <Divider/>
                        </div>
                        <div className="col s12 m5"><MonsterStats/></div>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

//setup propTypes - a react tool for checking the object is of the correct type
//we expect an array
App.propTypes = {
    monsters: PropTypes.array.isRequired
};

// create container component
//returns a list of monsters, finding all monsters in database
//list results in ascending order (1)
//store user ID in user variable
export default createContainer(() => {
    Meteor.subscribe('monsters');
    const user = Meteor.userId();
    return {monsters: Monsters.find({owner: user}, {
            sort: {
                name: 1
            }
        }).fetch()};
}, App);

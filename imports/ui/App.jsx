//inject dependancies
import React, { Component, PropTypes } from 'react';
//import mui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/list';
import Divider from 'material-ui/Divider';
//holds state
import { createContainer } from 'meteor/react-meteor-data';
//button tp link to route of new monster form
import { Link } from 'react-router';

//Database - collection
import {Monsters} from '../api/monsters.js';

//import custom components
import Roster from './Roster.jsx';
import MonsterStats from './MonsterStats.jsx';
import Monster from './Monster.jsx';
import Edit from './EditMonster.jsx';

//import login component
import AccountsWrapper from './AccountsWrapper.jsx';

//placeholder content before monsters are added
//const means data is immutable
const tempMonster = {
    name: 'placeholder name',
    team: 'placeholder team',
    strength : 1,
    cunning : 1,
    fighting : 1,
    size : 1,
    specialPowers : 1,
    smashingSkills : 1,
    scary : 1,
    agility : 1,
    notes: "welcome to monster stats",

};

//create DOM Component
export class App extends Component {
    //constructor creates object from class
    constructor(props) {
        super(props);
        //setting the the initial state
        //not showing edit form on load
        this.state = {
            currentMonster: tempMonster,
            showEditMonster: false,
        };
        //bind functionS manually - es6 does not do this automatically
        this.updateCurrentMonster = this.updateCurrentMonster.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.showmONStats = this.showMonsterStats.bind(this);
    }

    //take list of monster & map to a component
    //return roster component with key and monster object
    //props is the state from array
    //pass updateCurrentMonster into Roster component
    renderMonsters() {
        return this.props.monsters.map((monster) => (<Roster key={monster._id} monster={monster} updateCurrentMonster={this.updateCurrentMonster}/>));
    }

  //function to update state
    updateCurrentMonster(monster) {
    this.setState({
      currentMonster: monster,
    });
  }

//show edit monster form
    showEditForm() {
      this.setState({
        showEditMonster: true,
      });
    }
  //show monster stats in view
      showMonsterStats() {
        this.setState({
          showEditMonster: false,
        });
      }
        //pass current monster value
        // pass monster stats function so that edit form is no longer visible
          showForm() {
            if (this.state.showEditMonster === true) {
                return (<Edit currentMonster={this.state.currentMonster} showMonsterStats={this.showMonsterStats}/>);
            } else {
                return (<MonsterStats monsters={this.props.monsters}/>);
            }
        }

    //renders to main html file
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar title="Monster Application" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false}
                    style={{backgroundColor:'#0277bd'}}>
                        <AccountsWrapper/>
                    </AppBar>
                    <div className="row">
                        <div className="col s12 m7"><Monster monster={this.state.currentMonster} showEditForm={this.showEditForm}/></div>
                        <div className="col s12 m5">
                            <h2>Monster Roster</h2>
                            <Link to="/new" className="waves-effect waves-light btn light-blue darken-3">Add Monster</Link>
                            <Divider/>
                            <List>
                                {this.renderMonsters()}
                            </List>
                            <Divider/>
                        </div>
                    </div>

                        <div className="row">
                        <div className="col s12 m5">
                            <br/>



                        </div>
                    </div>
                <div className = "row" >
                    <div className="col s12"><br/><Divider/>{this.showForm()}<Divider/></div>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

//setup propTypes - a react tool for checking the object is of the correct type
//we expect an array
App.propTypes = {
    monsters: PropTypes.array.isRequired,
};

// create container component
//returns a list of monsters, finding all monsters in database
//list results in ascending order (1)
//store user ID in user variable
export default createContainer(() => {
    Meteor.subscribe('monsters');
    const user = Meteor.userId();

    return {
        monsters: Monsters.find({ owner: user }, {sort: { name: 1}}).fetch(),
    };
}, App);

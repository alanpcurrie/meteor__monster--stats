//import dependancies
import React, { Component, PropTypes } from 'react';
//import mui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
//holds state
import { createContainer } from 'meteor/react-meteor-data';
//button to link to route of new monster form
import { Link } from 'react-router';



// database - collection
import { Monsters } from '../api/monsters';
//import custom components
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Monster from './Monster';
//import login component
import AccountsWrapper from './AccountsWrapper';
//import edit component
import Edit from './EditMonster';

//placeholder content before monsters are added
  //const means data is immutable
const styles = {
  bangers: {
    fontFamily: "bangers",
  },
  oswald: {
    fontFamily: "oswald",
  },
  logoFont: {
    fontSize: "20px",
    fontFamily: "bangers",
  },
};

const tempMonster = {
  name: "Welcome to Monster Mayhem",
  team: "Sign in to add your stats",
  cunning: 0,
  strength: 0,
  smashingSkills: 0,
  fighting: 0,
  scary: 0,
  specialPowers: 0,
  agility: 0,
  resilience: 0,
  notes: "roar!",
}



//create DOM Component
export class App extends Component  {
  constructor(props) {
    super(props);
    //setting the the initial state
      //not showing edit form on load
    this.state = {
      currentMonster: tempMonster,
      showEditMonster: false,
     };
     //bind functions manually - es6 does not do this automatically
    this.updateCurrentMonster = this.updateCurrentMonster.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);

  }

//take list of monster & map to a component
  //return roster component with key and monster object
    //props is the state from array
      //pass updateCurrentMonster into Roster component
  renderMonsters() {
    return this.props.monsters.map((monster) => (
      <TeamList key={monster._id} monster={monster} updateCurrentMonster={this.updateCurrentMonster}/>
    ));
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
  showTeamStats() {
    this.setState({
      showEditMonster: false,
    });
  }
  //pass current monster value
    // pass monster stats function so that edit form is no longer visible
  showForm() {
    if(this.state.showEditMonster === true) {
      return (<Edit currentMonster={this.state.currentMonster}
      showTeamStats={this.showTeamStats}/>);
    } else {
      return (<TeamStats monsters={this.props.monsters}/>);
    }
  }
  //renders to main html file
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">

          <AppBar
            title="Monster Mayhem"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={styles.bangers}>
              <AccountsWrapper />
            </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Monster monster={this.state.currentMonster} showEditForm={this.showEditForm}/></div>
            <div className="col s12 m5" >
              <h2 style={styles.bangers}>Monster Team</h2>

              <Link to="/new" className="btn waves-effect waves-light" style = {styles.oswald}>Add Monster</Link>
              <Divider/>
                <List>
                  {this.renderMonsters()}
                </List>
              <Divider/>
            </div>

          </div>
          <div className="row">
            <div className="col s12" >
              <br/>
              <Divider/>
              {this.showForm()}
              <Divider/>
            </div>
          </div>
        </div>


      </MuiThemeProvider>
    )
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

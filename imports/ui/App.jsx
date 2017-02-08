import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';


// database - collection
import { Monsters } from '../api/monsters';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Monster from './Monster';
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditMonster';

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
  cunning: 2,
  strength: 3,
  smashingSkills: 2,
  fighting: 1,
  scary: 2,
  specialPowers: 0,
  agility: 1,
  resilience: 2,
  notes: "roar!",
}

export class App extends Component  {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = {
      currentMonster: tempMonster,
      showEditMonster: false,
     };
    this.updateCurrentMonster = this.updateCurrentMonster.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);

  }

  renderMonsters() {
    return this.props.monsters.map((monster) => (
      <TeamList key={monster._id} monster={monster} updateCurrentMonster={this.updateCurrentMonster}/>
    ));
  }

  updateCurrentMonster(monster) {
    this.setState({
      currentMonster: monster,
    });
  }

  showEditForm() {
    this.setState({
      showEditMonster: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditMonster: false,
    });
  }

  showForm() {
    if(this.state.showEditMonster === true) {
      return (<Edit currentMonster={this.state.currentMonster}
      showTeamStats={this.showTeamStats}/>);
    } else {
      return (<TeamStats monsters={this.props.monsters}/>);
    }
  }

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
              <h2 style={styles.bangers}>Team list</h2>

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

App.propTypes = {
  monsters: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('monsters');
  const user = Meteor.userId();

  return {
    monsters: Monsters.find({ owner: user }, {sort: { name: 1}}).fetch(),
  };
}, App);

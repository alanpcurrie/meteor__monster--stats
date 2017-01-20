//inject dependancies
import React, {Component} from 'react';
//impirt mui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/list';
import Divider from 'material-ui/Divider';

//import custom components
import Roster from './Roster';
import Monster from './Monster';
import MonsterStats from './MonsterStats';

//create DOM Component
export default class App extends Component {
    //constructor creates object from class
    constructor(props) {
        super(props);
        //setting the state
        this.state = {
            monsters: []
        };
    }
    //component will mount = new state of data
    componentWillMount() {
        this.setState({
            monsters: [
                {
                    _id: 1,
                    name: "Cthulu",
                    strength: 1,
                    cunning: 2,
                    fighting: 3,
                    size: 4,
                    specialPowers: 10,
                    SmashingSkills: 7,
                    scary: 8,
                    agility: 5

                }, {
                    _id: 2,
                    name: "xenomorph",
                    strength: 5,
                    cunning: 10,
                    fighting: 5,
                    size: 2,
                    specialPowers: 2,
                    SmashingSkills: 4,
                    scary: 10,
                    agility: 10
                }, {
                    _id: 3,
                    name: "godzilla",
                    strength: 10,
                    cunning: 4,
                    fighting: 3,
                    size: 10,
                    specialPowers: 3,
                    SmashingSkills: 7,
                    scary: 7,
                    agility: 2

                }
            ]
        });
    }

    //take list of monster & map to a component
    //return rsoter component with key and monster object
    renderMonsters() {

        return this.state.monsters.map((monster) => (<Roster key={monster._id} monster={monster}/>));
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar title="Monster Application" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false}/>
                    <div className="row">
                        <div className="col s12 m7"><Monster/></div>
                        <div className="col s12 m5">
                            <h2>Monster Roster</h2>
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

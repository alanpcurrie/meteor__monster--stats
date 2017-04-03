//import dependancies
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';
import { lightGreenA200 } from 'material-ui/styles/colors';

//create component
  //pass on props form monster parent
    //bring updateCurrentMonster into compoment scope
      //click creates event to update state
        //updates current monster by passing monster props
export default class TeamList extends Component {
  updateCurrentMonster(monster) {
    this.props.updateCurrentMonster(monster);
  }

  deleteMonster(monsterId) {
    Meteor.call('deleteMonster', monsterId, (error) =>{
      if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        console.log("Monster deleted! Move along...");

      }
    });
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.monster.name}
        leftAvatar={<Avatar src={this.props.monster.name + ".jpg"}/>}
        rightIcon={<ActionDeleteForever hoverColor={red500}
          onClick={this.deleteMonster.bind(this, this.props.monster._id)}/>}
        onClick={this.updateCurrentMonster.bind(this, this.props.monster)}
        />
    )
  }
}

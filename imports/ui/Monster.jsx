//import dependancies
import React, { Component } from 'react';

//import components
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { purple100, purple500 } from 'material-ui/styles/colors';

//styles for styling components use as {styles.chip} {styles.wrapper} {styles.button}
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};
//create component
  //make edit form function available in this component
export default class Monster extends Component {
  showEditForm() {
    this.props.showEditForm();
  }

  render() {
    const monster = this.props.monster;
    const defense = monster.fighting + monster.scary + monster.specialPowers + monster.agility + monster.resilience;
    const offense = monster.strength + monster.agility + monster.cunning + monster.smashingSkills + monster.scary + monster.resilience;
    const total = monster.strength + monster.agility + monster.cunning + monster.smashingSkills + monster.scary + monster.resilience + monster.fighting + monster.specialPowers;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={monster.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}
        >
            <img src={monster.name + ".jpg"} alt= {this.props.monster.name + " image" }/>


        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
              <Avatar size={32} color={purple100} backgroundColor={purple500}>
                {monster.cunning}
              </Avatar>
              Cunning
            </Chip>
            <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.strength}
            </Avatar>
            Strength
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.smashingSkills}
            </Avatar>
            Smashing Skills
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.fighting}
            </Avatar>
            Fighting
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.scary}
            </Avatar>
            Scary
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.specialPowers}
            </Avatar>
            Special Powers
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.agility}
            </Avatar>
            Agility
          </Chip>
          <Chip
            backgroundColor={purple100}
            style={styles.chip}
            >
            <Avatar size={32} color={purple100} backgroundColor={purple500}>
              {monster.resilience}
            </Avatar>
            Resilience
          </Chip>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit monster/stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}/>
        </CardActions>
      </Card>
    )
  }
}

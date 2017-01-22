//inject dependancies
import React, {Component} from 'react';
//import components
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, lightBlue800, lightBlue50} from 'material-ui/styles/colors';

//styles for styling components
const styles = {
    chip: {
        margin: 4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    button: {
        margin: 12
    }
};

//create component
//make edit form function available in this component
export default class Monster extends Component {
    showEditForm() {
      this.props.showEditForm();
    }
    render() {
        //create monster variable
        const monster = this.props.monster;
        //attack points total
        const attack = monster.fighting + monster.smashingSkills + monster.specialPowers + monster.cunning;
        //defence points total
        const defence = monster.strength + monster.scary + monster.agility + monster.size;
        //total monster powers
        const monsterPower = (attack + defence);

        return (
            <Card>
                <CardMedia overlay={< CardTitle title = {
                    monster.name
                }
                subtitle = {
                    `Attack: ${attack} - Defence: ${defence} - Monster power: ${monsterPower}`
                } />}>
                <img src="xenomorph.jpg" />
                </CardMedia>

                <CardText>
                    <div style={styles.wrapper}>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.strength}
                            </Avatar>
                            Strength
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.cunning}
                            </Avatar>
                            Cunning
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.fighting}
                            </Avatar>
                            Fighting
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.size}
                            </Avatar>
                            Size
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.specialPowers}
                            </Avatar>
                            Special powers
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.smashingSkills}
                            </Avatar>
                            Smashing skills
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.scary}
                            </Avatar>
                            Scary
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {monster.agility}
                            </Avatar>
                            Agility
                        </Chip>
                    </div>
                </CardText>
                <CardActions>
                  <RaisedButton
                    label="Edit your monster"
                    labelPosition="before"
                    style={styles.button}
                    onClick={this.showEditForm.bind(this)}/>
                </CardActions>
            </Card>
        );
    }
}

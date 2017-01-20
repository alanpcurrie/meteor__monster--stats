//inject dependancies
import React, {Component} from 'react';
//import components
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, blue900} from 'material-ui/styles/colors';

//styles for styling components
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
export default class Monster extends Component {
    render() {
        return (
            <Card>
                <CardMedia overlay={< CardTitle title = "Cthulhu" subtitle = "Offence: 12 - Defense: 8" />}>
                    <img src="cathulu.jpg"/>
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            1
                        </Avatar>
                        Strength
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            2
                        </Avatar>
                        Cunning
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            3
                        </Avatar>
                        Fighting
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            4
                        </Avatar>
                        Size
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            10
                        </Avatar>
                        Special powers
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            6
                        </Avatar>
                        Smashing skills
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            7
                        </Avatar>
                        Scary
                    </Chip>
                    <Chip backgroundColor={blue200}  style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            8
                        </Avatar>
                        Agility
                    </Chip>
                </div>
                </CardText>
                <CardActions></CardActions>
            </Card>
        );
    }
}

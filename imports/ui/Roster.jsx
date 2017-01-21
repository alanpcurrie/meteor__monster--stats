//inject dependancies
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/list';
import ActiondeleteForever from 'material-ui/svg-icons/action/delete-forever';

//create component
//pass on props form monster parent
export default class Roster extends Component {
    render() {
        return (
            <ListItem
                primaryText={this.props.monster.name}
                leftAvatar={<Avatar src="xenomorph.jpg"/>}
            />
        );
    }
}

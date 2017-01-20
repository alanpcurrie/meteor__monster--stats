//inject dependancies
import React, {Component} from 'react';

//create component
export default class Monster extends Component {
    render() {
        return (
            <Card>
                <CardMedia overlay={< CardTitle title = "Cthulhu" subtitle = "Offence: 12 - Defense: 8" />}>
                    <img src="images/nature-600-337.jpg"/>
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle"/>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
}

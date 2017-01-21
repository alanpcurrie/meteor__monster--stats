//inject dependancies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

// create component
//blaze to render button for user account into user component
export default class AccountsWrapper extends Component {
    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }
    //destroys view when component is no longer required
    componentWillUnmount() {
        Blaze.remove(this.view);
    }
    //renders component
    render() {
        return <span ref="container"/>;
    }
}

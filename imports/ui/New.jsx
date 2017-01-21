//inject dependancies
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//import custom components
import { Monsters } from '../api/monsters.js';

//create component
//react compoment requites at least one div - everything must be nested within first div
export default class New extends Component {

    //form submit function
    submitMonster(event) {
        //prevents default browser submit and refresh
        event.preventDefault();
        //insert monster stats into MongoDB
        let monster  =  {
            name : this.refs.name.value,
            team : this.refs.team.value,
            strength : this.refs.strength.value,
            cunning : this.refs.cunning.value,
            fighting : this.refs.fighting.value,
            size : this.refs.size.value,
            specialPowers : this.refs.specialPowers.value,
            smashingSkills : this.refs.smashingSkills.value,
            scary : this.refs.scary.value,
            agility : this.refs.agility.value,
            notes : this.refs.notes.value,
            createdAt : new Date(),
            owner: Meteor.userId(),
        }
        //call insertMonster to the server and pass the monster object
        //notify status to user
        Meteor.call("insertMonster", monster, (error) => {
            if (error) {
                alert("argh! you've made a monsterous error:", error.reason);
            }
            else {
                alert("Monster added:");
                browserHistory.push('/');
                //push to homepage route with browser history
            }
        });


    }

    render() {
        return (
            <div className="row">
                {/* es6 requires fucntion to be manually binded  */}
                <form className="col s12" onSubmit={this.submitMonster.bind(this)}>
                    <h3>Add a new monster</h3>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Name" ref="name" type="text" className="validate"/>
                        </div>
                        <div className="input-field col s6">

                            <input placeholder="Team" ref="team" className="validate"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Strength</h5>
                            <select className="browser-default" ref="strength">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Cunning</h5>
                            <select className="browser-default" ref="cunning">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Fighting</h5>
                            <select className="browser-default" ref="fighting">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Size</h5>
                            <select className="browser-default" ref="size">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Special Powers</h5>
                            <select className="browser-default" ref="specialPowers">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Smashing Skills</h5>
                            <select className="browser-default" ref="smashingSkills">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Scary</h5>
                            <select className="browser-default" ref="scary">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Agility</h5>
                            <select className="browser-default" ref="agility">
                                <option value="0">0 - Needs to level up</option>
                                <option value="1">1 - More terrorising required</option>
                                <option value="2">2 - Bit of a beast</option>
                                <option value="3">3 - King kong ain't got sh*t on me</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Notes</h5>
                            <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                <i className="material-icons right">submit</i>
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        );
    }
}

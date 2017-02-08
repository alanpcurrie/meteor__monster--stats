import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Monsters } from '../api/monsters';

const styles = {
  bangers: {
    fontFamily: "bangers",
  },
  oswald: {
    fontFamily: "oswald",
  },
};

export default class Example extends Component {
  submitMonster(event) {
    event.preventDefault();

    let monster = {
      name: this.refs.name.value,
      team: this.refs.team.value,
      cunning: this.refs.cunning.value,
      strength: this.refs.strength.value,
      smashingSkills: this.refs.smashingSkills.value,
      fighting: this.refs.fighting.value,
      scary: this.refs.scary.value,
      specialPowers: this.refs.specialPowers.value,
      agility: this.refs.agility.value,
      resilience: this.refs.resilience.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('insertMonster', monster, (error) =>{
      if(error) {
        alert("Argh.. you've made a monsterous error: " + error.reason);
      } else {
        alert("Monster added");
        browserHistory.push('/');
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitMonster.bind(this)}>
          <h3 style={styles.bangers}>Add a new monster</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Cunning</h5>
              <select className="browser-default" ref="cunning">
                <option value="0">0 - Need's to work on this</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Strength</h5>
              <select className="browser-default" ref="strength">
                <option value="0">0 - Need's to work on this</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Smashing Skills</h5>
              <select className="browser-default" ref="smashingSkills">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Fighting</h5>
              <select className="browser-default" ref="fighting">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Scary</h5>
              <select className="browser-default" ref="scary">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Special Powers</h5>
              <select className="browser-default" ref="specialPowers">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Agility</h5>
              <select className="browser-default" ref="agility">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5 style={styles.oswald}>Resilience</h5>
              <select className="browser-default" ref="resilience">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action" style ={styles.oswald}>Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

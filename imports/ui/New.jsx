//import dependancies
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//import custom components
import { Monsters } from '../api/monsters';
import { StyleSheet, css } from 'aphrodite';

//component inline styles use as {styles.bangers} {styles.oswald}
const inlineStyles = {
  bangers: {
    fontFamily: "bangers",
  },
  oswald: {
    fontFamily: "oswald",
  },
};

//create component
  //react compoment requites at least one div - everything must be nested within first div
export default class newMonster extends Component {
  //form submit function
  submitMonster(event) {
    //prevents default browser submit and refresh
    event.preventDefault();
    //insert monster stats into MongoDB
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
    //call insertMonster to the server and pass the monster object
      //notify status to user
        //push to homepage route with browser history
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
        {/* es6 requires fucntion to be manually binded */}
        <form className="col s12" onSubmit={this.submitMonster.bind(this)}>
          <h3 className={css(styles.bangers)}>Add a new monster</h3>

          <div className="row">
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Monster Name</h5>
              <select className="browser-default" ref="name" >
                <option value="Cthulu">Cthulu</option>
                <option value="Haggis-thing">Haggis thing</option>
                <option value="kaiju-sorcerer">kaiju sorcerer</option>
                <option value="Salami">Salami</option>
              </select>
            </div>

            <div className="input-field col s12 m12 l6">
                <h5 className={css(styles.oswald)}>Team</h5>
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Cunning</h5>
              <select className="browser-default" ref="cunning">
                <option value="0">0 - Need's to work on this</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Strength</h5>
              <select className="browser-default" ref="strength">
                <option value="0">0 - Need's to work on this</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Smashing Skills</h5>
              <select className="browser-default" ref="smashingSkills">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Fighting</h5>
              <select className="browser-default" ref="fighting">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Scary</h5>
              <select className="browser-default" ref="scary">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Special Powers</h5>
              <select className="browser-default" ref="specialPowers">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Agility</h5>
              <select className="browser-default" ref="agility">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
            <div className="input-field col s12 m12 l6">
              <h5 className={css(styles.oswald)}>Resilience</h5>
              <select className="browser-default" ref="resilience">
                <option value="0">0 - Need's to work on this...</option>
                <option value="1">1 - Apprentice level monster</option>
                <option value="2">2 - Bit of a beast !</option>
                <option value="3">3 - King Kong ain't got sh*t on me!</option>
              </select>
            </div>
          </div>

          <div className="row">
             <div className="input-field col s12 m12 l6">
               <textarea placeholder="Notes" ref="notes" className="materialize-textarea" />
             </div>
             <div className="input-field col s12 m12 l6">
               <button className="btn waves-effect waves-light" type="submit" name="action" style ={inlineStyles.oswald}>Submit
                 <i className="material-icons right">send</i>
               </button>
             </div>
           </div>
        </form>
      </div>
    )
  }
}

const styles = StyleSheet.create ({
  bangers: {
    fontFamily: "bangers",
  },
  oswald: {
    fontFamily: "oswald",
  },
});

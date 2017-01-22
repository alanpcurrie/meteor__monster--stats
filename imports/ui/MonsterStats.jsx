//inject dependancies
import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';



//create component
export default class MonsterStats extends Component {
    render() {
        const monsters = this.props.monsters;
        const numMonsters = monsters.length;
        // get total number of skill for team
        // getpotential number for the team 3 * no of monsters
        const strength = Math.round((monsters.reduce((strength, monster) => {
            return strength + monster.strength;
        }, 0) / (3 * numMonsters)) * 100);

        const cunning = Math.round((monsters.reduce((cunning, monster) => {
            return cunning + monster.cunning;
        }, 0) / (3 * numMonsters)) * 100);

        const fighting = Math.round((monsters.reduce((fighting, monster) => {
            return fighting + monster.fighting;
        }, 0) / (3 * numMonsters)) * 100);

        const size = Math.round((monsters.reduce((size, monster) => {
            return size + monster.size;
        }, 0) / (3 * numMonsters)) * 100);

        const specialPowers = Math.round((monsters.reduce((specialPowers, monster) => {
            return specialPowers + monster.specialPowers;
        }, 0) / (3 * numMonsters)) * 100);

        const smashingSkills = Math.round((monsters.reduce((smashingSkills, monster) => {
            return smashingSkills + monster.smashingSkills;
        }, 0) / (3 * numMonsters)) * 100);

        const scary = Math.round((monsters.reduce((scary , monster) => {
            return scary  + monster.scary ;
        }, 0) / (3 * numMonsters)) * 100);

        const agility = Math.round((monsters.reduce((agility, monster) => {
            return agility + monster.agility;
        }, 0) / (3 * numMonsters)) * 100);

        const defence = Math.round((strength + scary + agility + size)/4);

        const attack =  Math.round(( fighting + smashingSkills + cunning + specialPowers)/4);

        const monsterPower = (attack + defence);

        const data = {
        labels: ['strength', 'cunning', 'fighting', 'size', 'specialPowers', 'smashingSkills', 'scary', 'agility'],
        datasets: [
          {
            label: 'In % of max possible monster powers',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [strength, cunning, fighting, size, specialPowers, smashingSkills, scary, agility]
          }
        ]
      };

        return (
          <div>
            <h2>Monster Stats</h2>
            <div className="row">
              <div className="col s12 m7">
                <Radar data={data}
                  width={500}
                  height={500}
                  option={{
                    maintainAspectRatio: false
                  }}/>
              </div>

              <div className="col s12 m5">
                <h2>Monster power totals</h2>
                  <Divider />
                    <h4>Maximum attack power: {attack}</h4>
                    <h4>Maximum defence power: {defence}</h4>
                    <h4>Maximum monster power: {monsterPower}</h4>
                  <Divider />
                      <h4>{numMonsters}</h4>
              </div>
            </div>
          </div>
        );
    }
}

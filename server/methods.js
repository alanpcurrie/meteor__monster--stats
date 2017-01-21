import {Meteor} from 'meteor/meteor';
//import monsters collection
import {Monsters} from '../imports/api/monsters.js';

//insert monster method
//pass player object to DB from the client securely
   Meteor.methods({
    insertMonster(monster) {
        Monsters.insert(monster);
    }
});

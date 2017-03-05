//import meteor
import { Meteor } from 'meteor/meteor';
//import monsters collection
import { Monsters } from '../imports/api/monsters';

//insert monster method
  //pass monster object to DB from the client securely
Meteor.methods({
  insertMonster(monster) {
    Monsters.insert(monster);
  },

  updateMonster(monster) {
    Monsters.update(monster._id,
    { $set: monster});
  },

  deleteMonster(monsterId) {
    Monsters.remove(monsterId);
  }
});

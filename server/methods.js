import { Meteor } from 'meteor/meteor';
import { Monsters } from '../imports/api/monsters';

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

import { Meteor } from 'meteor/meteor';
import { Monsters } from '../imports/api/monsters';

Meteor.startup(() => {
  Meteor.publish('monsters', function() {
    return Monsters.find({});
  })
});

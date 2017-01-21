import { Meteor } from 'meteor/meteor';
//import monsters collection
import { Monsters} from '../imports/api/monsters.js';

//code only run on the server
//meteor publish uses monsters collection

Meteor.startup(() => {
  Meteor.publish('Monsters', function() {
    return Monsters.find({});
  });
});

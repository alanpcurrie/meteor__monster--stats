//import meteor
import { Meteor } from 'meteor/meteor';
//import monsters collection
import { Monsters } from '../imports/api/monsters';

//code only run on the server
  //meteor publish uses monsters collection
Meteor.startup(() => {
  Meteor.publish('monsters', function() {
    return Monsters.find({});
  })
});

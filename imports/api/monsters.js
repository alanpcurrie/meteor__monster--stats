import { Mongo } from 'meteor/mongo';

export const Monsters = new Mongo.Collection('monsters');

Monsters.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Monsters.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const MonsterSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  cunning: { type: Number, defaultValue: 0},
  strength: { type: Number, defaultValue: 0},
  smashingSkills: { type: Number, defaultValue: 0},
  fighting: { type: Number, defaultValue: 0},
  scary: { type: Number, defaultValue: 0},
  specialPowers: { type: Number, defaultValue: 0},
  agility: { type: Number, defaultValue: 0},
  resilience: { type: Number, defaultValue: 0},
  notes: { type: String, optional: true},
  owner: { type: String },
});

Monsters.attachSchema(MonsterSchema);

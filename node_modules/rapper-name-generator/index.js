var words = require('./words.js');

// Get a random number from 0 to the amount
// specified.
function getRandom(amount) {
  return Math.floor(Math.random() * amount);
}

// Get a word from the type's list (ie, noun,
// adjective).
function getWord(type) {
  var list = words[type];
  return list[getRandom(list.length)];
}

// Generate the name
function generateName() {
  var name = '';
  var hasTwoNouns = getRandom(2);
  var adjective = getWord('adjectives');

  // The adjective
  name += adjective;

  // The first noun
  name += ' ' + getWord('nouns');

  // Inserting a second noun
  if (hasTwoNouns == 1) {
    name += ' ' + getWord('nouns');
  }

  return name;
}

module.exports = generateName;

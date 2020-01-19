// HASHES TABLE
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  this.add = (key,value) => {
    var hashedKey = hash(key);
    if(!this.collection[hashedKey]) {
      this.collection[hashedKey] = {}
    }
    this.collection[hashedKey][key] = value;
  }
  this.remove = (key) => {
    var hashedKey = hash(key);
    delete this.collection[hashedKey];
  }
  this.lookup = key => {
    var hashedKey = hash(key);
    if (this.collection.hasOwnProperty(hashedKey)) {
      return this.collection[hashedKey][key];
    } else {
      return null;
    }
  }
};
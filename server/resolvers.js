const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

const Query = {
   test: () => store.collection('students').list()
}

module.exports = { Query }   
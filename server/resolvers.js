const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

const Query = {
   test: () => store.collection('students')
}

module.exports = {Query}   
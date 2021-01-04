const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

const Query = {
   greeting: () => {
      return "hello from  TutorialsPoint !!!"
   },
   students: () => store.collection('students').list(),
   studentById: (root, args, context, info) => {
      return store.collection('students').get(args.id);
   },
   limitedStudents: (root, args, context, info) => {
      return store.collection('students').list().slice(0, args.first)
   },
   sortedStudents: (root, args, context, info) => {
      return store.collection('students').list();
   }
}

const Student = {
   fullName:(root,args,context,info) => {
      return root.firstName + ":" + root.lastName
   }
}

module.exports = { Query, Student }   
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

const Mutation = {
   createStudent: (root, args, context, info) => {
      let studentObj = store.collection('students');
      let idCount = studentObj.list().length;
      const newStudent = {
         id: `${idCount++}`,
         firstName: args.firstName,
         lastName: args.lastName
      }
      studentObj.create(newStudent);
      return newStudent
   },
   updateStudent: (root, args, context, info) => {
      let studentList =  store.collection('students');
      studentList.update({ id: args.id, firstName : args.firstName, lastName : args.lastName});
      return studentList.list()
   },
   deleteStudent: (root, args, context, info) => {
      let studentList =  store.collection('students');
      studentList.delete(args.id);
      return studentList.list()
   }
}

const Student = {
   fullName:(root,args,context,info) => {
      return root.firstName + ":" + root.lastName
   }
}

module.exports = { Query, Mutation, Student }   
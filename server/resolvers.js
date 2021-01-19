const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

const Query = {
   // Sample API call
   greeting: () => {
      return "hello from  TutorialsPoint !!!"
   },
   // Fetch list of students
   students: () => store.collection('students').list(),
   // Fetch student detail
   studentById: (root, args, context, info) => {
      return store.collection('students').get(args.id);
   },
   // Fetch specific count based list
   limitedStudents: (root, args, context, info) => {
      return store.collection('students').list().slice(0, args.first)
   },
   // Apply sorting on student list
   sortedStudents: (root, args, context, info) => {
      return store.collection('students').list();
   }
}

const Mutation = {
   // Create new student in student list
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
   // Update student detail based on id
   updateStudent: (root, args, context, info) => {
      let studentList =  store.collection('students');
      studentList.update({ id: args.id, firstName : args.firstName, lastName : args.lastName});
      return studentList.list()
   },
   // Delete specific student from list
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

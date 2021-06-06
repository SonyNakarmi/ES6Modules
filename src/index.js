import {PersonPrototype} from './ClassesModule';
import {Teacher} from './ClassesModule';


console.log('**** - Named and Default Imports - ****');

const newPerson = new PersonPrototype('Sony');
newPerson.walk();

const TeacherObject = new Teacher('Sony','Graduate');
console.log(TeacherObject);

TeacherObject.teach();
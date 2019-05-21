console.log('app.js')

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./note.js');
debugger;
console.log(_.isString(true));
notes.addNote(argv.a,argv.b);
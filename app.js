const validator = require('validator')
const chalk= require('chalk')
const yargs= require('yargs')
const fs= require('fs')


const notes = require('./notes.js')
const { demandOption } = require('yargs')

yargs.version('1.1.0')

//command to add

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title,argv.body)
        // console.log('Title : '+argv.title)
        // console.log('body : '+argv.body)
    }

})

//command to remove

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => {
        notes.removeNote(argv.title)
    }

})

//command to list

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler () {
        notes.listNotes()
    }

})

//command to read

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => {
        notes.readNote(argv.title)
    }

})

yargs.parse()
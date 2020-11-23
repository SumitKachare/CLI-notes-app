const clalk = require('chalk')
const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes.js')
console.log("Syntax to run this application is : node app.js --title=this is title --body= this is body")
yargs.command({
    command:'add',
    describe:'adds a file',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title , argv.body) 
    }
})

yargs.command({
    command:'remove',
    describe:'remove Notes',
    builder:{
        title:{
            describe:'title to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list all Notes',
    handler(argv){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reads Note',
    builder:{
        title:{
            describe:'title to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
    
})


yargs.parse()
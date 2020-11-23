const fs = require('fs')
const clalk = require('chalk')
const chalk = require('chalk')



var addNote = (title, body)=>{
    const notes = loadNotes()   
    const duplicateNote = notes.filter((note)=> note.title === title)
    
    if (duplicateNote.length === 0) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.greenBright("New note added Successfully"))
    } else {
        console.log(chalk.redBright("Note title already taken!!"))
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    const data =fs.writeFileSync('notes.json' , dataJSON)
}

var loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []      
    }
     
}

debugger

var removeNotes = (title)=>{
    const notes =loadNotes()
    const notesKeep = notes.filter((note)=> note.title !== title)

    if (notes.length>notesKeep.length ) {
            console.log(chalk.greenBright("Note deleted successfully"))
           
    } else {
        console.log(chalk.redBright("Note not found!!"))
       
    }
    saveNotes(notesKeep)
}

var listNotes = function(){
    
    const lnotes = loadNotes()
    console.log(chalk.blueBright("Your notes : "))

    lnotes.forEach(note => {
        console.log(note.title)
    });
}
var readNote = function(title){
    var notes = loadNotes()
    var oneNote =notes.find((note)=>note.title==title)
    if (oneNote) {
        console.log(chalk.yellowBright(oneNote.title))
        console.log(chalk.yellowBright(oneNote.body))

    } else {
        console.log(chalk.redBright("Note doest exist!"))
    }
    
   
}

module.exports={
    addNote: addNote ,
    removeNotes : removeNotes,
    listNotes:listNotes,
    readNote:readNote
}




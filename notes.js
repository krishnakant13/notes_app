const fs = require('fs')
const chalk = require('chalk')
const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicatenotes = notes.filter((note) => {
    //     return note.title===title
    // })
    const duplicatenote = notes.find((note) => {
        //find stops the search when required element is found
        return note.title===title
    })
   // console.log(duplicatenote)
    // const duplicatenotes = notes.filter(function(note) {
    //     return note.title===title
    // })
    debugger
    if(duplicatenote === undefined)
    {
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added sucessfully!!!'))
    }
    else
    {
        console.log(chalk.red.inverse('Notes already exists'))
    }
    console.log(notes)
}

const removeNote =  (title) =>
{
    const notes = loadNotes()
    const notestokeep = notes.filter((note)=>{
        return note.title !==title
    })
   // console.log(notestokeep)
    if(notestokeep.length === notes.length)
    {
        console.log(chalk.red.inverse('No notes found!!!'))
    }
    else{
        console.log(chalk.green.inverse('Note removed!!!'))
        saveNotes(notestokeep)
    }
    
     
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.cyan.inverse('Your Notes '))
    notes.forEach(note => {
        console.log(note.title)
    });
   // console.log(notes)
}


const readNote = (title) => {
    var flag = 0
    const notes = loadNotes()
    // notes.forEach((note)=>{
    //     if(note.title=== title)
    //     {
    //         console.log(chalk.inverse(note.title)+' '+ note.body)
    //         flag =1
    //     }
    // })
    // if(flag === 0)
    // {
    //     console.log(chalk.red.inverse('Note not found'))
    // }

    const note = notes.find(function(note) {
        return note.title=== title
    })

    if(note)
    {
            console.log(chalk.inverse(note.title)+' '+ note.body)
            flag =1
            
    }
    else
    {
        console.log(chalk.red.inverse('Note not found'))
    }




}

const saveNotes = (nottes)=>{

        const datajson=JSON.stringify(nottes)
        fs.writeFileSync('notes.json',datajson)
}

const loadNotes = ()=> {

    try{
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    }
    catch(err){
        return []
    }
}

module.exports =
{
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
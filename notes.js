const fs = require('fs');
const chalk = require('chalk');

const normalText = chalk.green.italic;

//First method
const getNotes = function(){
    return 'your Notes...';

}


//get the note saved to the datastore
/* step 1: Loads the previous notes from the file named notes.json
   step 2 : comparing the existing title with the new title. if it alredy exists
            we will get a message already exist. otherwise it will get saved  in 
            the notes.json file.
*/


// Normal Function Syntax.
/*const addNote = function(title,body){
    console.log(title);

    const notes = loadNotes()
    console.log(notes);

    const duplicateNotes = notes.filter(function(note){
        console.log("existing title : ",note.title);
        return note.title === title
        
    });
    console.log("duplicatenotes length : ",duplicateNotes.length);

    if(duplicateNotes.length ===0){
        notes.push({
            title : title,
            body : body,
        });
        saveNotes(notes);
        console.log("New notes saved")

    }else{
        console.log("Notes title has alredy been taken");

    }


}*/

// Arrow Function syntax.
const addNote = (title,body)=>{
    
    const notes = loadNotes()

    const duplicateNotes = notes.find((note)=>note.title === title); // find the first match and stops.

    if(!duplicateNotes){
        notes.push({
            title : title,
            body : body,
        });
        saveNotes(notes);
        console.log("New notes saved")

    }else{
        console.log("Notes title has alredy been taken");

    }


}


// Normal Function Syntacx.
/*
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    console.log("notesToKeep",notesToKeep);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}
*/
// Arrow Function Syntax.
const removeNote = (title)=> {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    console.log("notesToKeep",notesToKeep);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = ()=>{
    const notes = loadNotes();

    notes.forEach(element => {
        console.log("note :",element.title);
        
    });   

};

const readNotes =(title)=>{
    console.log("This is title : ",title);
    const notes = loadNotes();
    let noteslist = notes.find((note)=>note.title === title);

    if(noteslist){
        console.log(noteslist);
    }else{
        console.log(chalk.red("not Found!"))
    } 

};

// Normal Function Syntax.
/*
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}
*/

//Arrow Function Syntax.
const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}


// Normal Function Syntax.
/*
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    }catch(e){
        return [];
    }

}
*/

//Normal Function Syntax.
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    }catch(e){
        return [];
    }

}



module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes :readNotes,
}


/* Method 2
exports.getNotes = ()=>{
    return "your Notes....";
}; 
*/


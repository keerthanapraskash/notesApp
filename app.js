//First method
const chalk = require('chalk');
const notes = require('./notes');
//const yargs = require('yargs')//Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface


const msg = notes.getNotes();

//chalk is userd for different text colors.
const error = chalk.inverse.red;
const warning = chalk.keyword('orange');
const normalText = chalk.green.italic;

const name = 'Keerthana Prakash';
console.log(chalk.green('Hello %s'), name);

console.log(chalk.green(msg));

console.log(error('Hi... This is an error message'));
console.log(warning("Hello.... This is a warning"));
console.log(normalText("Hi this is the normal text color"));

/*
//using process.argv for interacting with commandline
let command = process.argv[2];
if(command === "add"){
    console.log( "adding new notes");

}else if(command === "remove"){
    console.log("removing notes");
}
*/

const yargs = require('yargs');
const { listNotes } = require('./notes');

yargs.version('1.1.0')
yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder : {
        title : {
            describe : "note title",
            demandOption : true,
            type : "String"
        },
        body : {
            describe : "note body",
            demandOption : true,
            type : "String"
        }
    },
    handler: function (argv) {
    console.log('Title : ',argv.title)
    console.log('body :',argv.body)
    notes.addNote(argv.title,argv.body);
    }
})


yargs.command({
    command :"remove",
    description : "Remove  notes",
    handler : function(argv){
        console.log("Removing  notes...");
        notes.removeNote(argv.title);
    }
});


yargs.command({
    command :"list",
    description : "listing your  notes",
    handler : function(){
        console.log("Listing your  notes...");
        notes.listNotes();
    }
   
});


yargs.command({
    command :"Read",
    description : "Reading  your  notes",
    handler : function(argv){
        console.log("Reading   your  notes...");
        notes.readNotes(argv.title);
        
    }
});


console.log(yargs.argv)

// Run the program like this
//node app.js add --title  "buy" --body  "This are the things to buy "




/* 2. Method
const notes = require('./notes');
let message = notes.getNotes();
console.log(message);
*/


// const fs = require('fs');
// try{
//     fs.appendFileSync('note.txt','This is the second line ');
// }catch(err){
//     console.log(err);
// }



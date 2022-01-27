const { addBook, findBook, listBook, removeBook } = require("./functions.js")

const yargs = require("yargs")
const argv = yargs.argv
const command = argv._[0]
const title = argv._[1]
const deadline = argv._[2]
if (command == "add") {
    if (title && deadline) {
        newNote = { title: title, deadline: deadline }
        console.log("Adding the book Details")
        addBook(newNote)
    } else {
        console.log("Please provide a title and a deadline")
    }
}

if (command == 'find') {
    const title = argv._[1]
    if (title) {
        findBook(title)
    } else {
        console.log("Please provide a Book title")
    }
}

if (command == 'list') {
    listBook()
}

if (command == 'remove') {
    const title = argv._[1]
    if (title) {
        removeBook(title)
    } else {
        console.log("Please provide a Book title")
    }
}
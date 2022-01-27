const fs = require("fs")
const addBook = (newNote) => {
    notes = loadBook()
        //console.log(notes)
    const duplicateNote = notes.find((note) => {
        return note.title === newNote.title
    })
    if (!duplicateNote) {
        notes.push(newNote)
        saveBook(notes)
        console.log("Book added successfully")
    } else {
        console.log("Cannot save!!! \nDuplicate book title find")
            //saveBook(notes)
    }
}

const findBook = (title) => {
    notes = loadBook()
    const res = notes.find((note) => {
        if (title === note.title) {
            return note
        }
    })
    if (res)
        console.log(res)
    else
        console.log("The book does not exists")
}

const listBook = () => {
    notes = loadBook()
    if (notes != []) {
        console.log("The Books are:")
        notes.forEach((note) => {
            console.log("Title: " + note.title + ", ", "Deadline: " + note.deadline)
        })
    } else {
        console.log("You have no books present")
    }
}

const removeBook = (title) => {
    notes = loadBook()
    const newNotes = notes.filter((note) => {
        if (note.title !== title)
            return note
    })
    if (newNotes.length === notes.length)
        console.log("No book data deleted")
    else {
        console.log("Book Data removed")
        saveBook(newNotes)
    }
}

const saveBook = (notes) => {
    fs.writeFileSync("book.json", JSON.stringify(notes))
}

const loadBook = () => {
    try {
        const dataBuffer = fs.readFileSync('book.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = { addBook, findBook, listBook, removeBook }
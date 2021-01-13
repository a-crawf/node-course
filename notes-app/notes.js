const fs = require('fs')
const chalk = require('chalk')
const log = console.log;

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))
    } else {
        log(chalk.red.inverse('Note title taken!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        log(chalk.green.inverse('Note removed!'))
    } else {
        log(chalk.red.inverse('No note found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    log(chalk.blue('Your notes'))

    notes.forEach((note) => log(chalk.red('Title: ' + note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()

    const matchingNote = notes.find((note) => note.title === title)

    if (matchingNote) {
        log(chalk.blue.inverse(matchingNote.title))
        log(matchingNote.body)
    } else {
        log(chalk.red.inverse('No note found!'))
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
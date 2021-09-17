const express = require('express');
const app = express()
app.use(express.json())
const Note = require('./mongoDb')
const dotenv = require("dotenv")
dotenv.config()
const Mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())



// const newNote = new Note({
//     content: 'Cloud is fun',
//     date: new Date(),
//     important: true
// })

// newNote.save().then(res => {
//     console.log('saved');
//     Mongoose.connection.close()
// })



const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
  
// app.use(requestLogger)


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/notes', (req, res) => {
    // Note.deleteMany({})
    Note.find({}).then(notes => {
        return res.json(notes)
    })
})
app.get('/notes/:id', (req, res) => {
    let { id } = (req.params)
    let note = notes.filter((n) => {
        return n.id == id
    })


    if (note.length) {
        res.send(note)
    }
    else {
        console.log('not found');
        res.status(404).send('<div>Not Found</div>')
    }
})

app.delete('/notes/:id', (req, res) => {
    let { id } = (req.params)
    let newNotes = notes.filter((n) => {
        return n.id != id
    })
    notes = newNotes
    Note.delete({})
    res.send(notes)
})

app.post('/notes', async (req, res) => {
    let data = req.body
    const newNote = new Note({
        content: data.content,
        important: data.important, 
        date: new Date()
    })
    await newNote.save().then(res => {
        console.log('saved');
        // Mongoose.connection.close()
    })
    res.json(newNote)
})

// app.put('/notes/:id', (req, res) => {
//     const { id } = req.params
//     Note.findOneAndUpdate(id, ).then(data => {
//         res.send(data)
//     })
// })

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
    


const port = 3001
app.listen(port, () => {
    console.log('working on 3001');
})
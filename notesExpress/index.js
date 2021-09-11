const express = require('express');
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())


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
    res.send(notes)
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
    res.send(notes)
})

app.post('/notes', (req, res) => {
    const content = req.body
    if (!content|| !content.content|| !content.important) {
        res.status(404).json({ 
            error: 'content missing' 
          })
    }
    let maxId = notes.reduce((sum, note) => {
        return sum = note.id
    }, 0)
    
     
    let note = req.body
    note.id = maxId + 1
    note.date = new Date();
    notes.push(note)
    res.send(note)
})

app.put('/notes/:id', (req, res) => {
    const { id } = req.params
    console.log(notes[id]);
    res.send('?')
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
    


const port = 3001
app.listen(port, () => {
    console.log('working on 3001');
})
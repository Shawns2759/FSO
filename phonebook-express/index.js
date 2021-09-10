const express = require('express')
const app = express();
const morgan = require('morgan')
app.use(express.json())

// morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.status(req, res),
//         tokens['response-time'](req, res), 'ms',
//       tokens()
//     ].join(' ')
//   })
// morgan.token('type', function (req, res) { return req.body})


app.use(morgan('tiny'))
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]



// const requestLogger = (request, response, next) => {
//     console.log('Method:', request.method)
//     console.log('Path:  ', request.path)
//     console.log('Body:  ', request.body)
//     console.log('---')
//     next()
// }
  
// app.use(requestLogger)

app.get('/phonebook/all', (req, res) => {
    res.send(persons)
})
app.get('/phonebook/:id', (req, res) => {
    const { id } = req.params
   let person = persons.filter((p) => {
        return p.id == id
    })
    res.send(person)
})
app.delete('/phonebook/:id', (req, res) => {
    const { id } = req.params
    persons = persons.filter((p) => {
        return p.id != id
   })
    console.log(persons);

    res.send(persons)
})



app.post('/phonebook', (req, res) => {
    let x = 0
    console.log(req.body);
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id > x) {
            x = persons[i].id
        }
        console.log(req.body.name, persons[i].name);
        if (req.body.name === persons[i].name) {
            return res.send('error').status(404)
        }
    }
    let person = {
        name: req.body.name,
        id: x + 1,
        number: req.body.number,
    }

    persons.push(person)
    res.send(person)
})

app.listen(3000, () => {
    console.log('woking on 3k');
})

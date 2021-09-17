const Mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const url = process.env.url
console.log(process.env.url);
Mongoose.connect(url).then((res) => {
    console.log('db connected');
})


const notesSchema = new Mongoose.Schema({
    content: String, 
    date: Date,
    important: Boolean
})
notesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Note = Mongoose.model('Note', notesSchema)

module.exports = Note
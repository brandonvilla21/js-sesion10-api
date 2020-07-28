const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const notes = require('./notes')
const app = express()


app.use(cors())
app.use(bodyParser.json())

app.get('/notes', (request, response) => {
  response.json(notes)
})

app.post('/notes', (request, response) => {
  const title = request.body.title
  const description = request.body.description
  createNote(title, description)
  response.sendStatus(201)
})

function createNote(title, description) {
  const newNote = {
    title,
    description,
    creationDate: new Date(),
    id: notes.length + 1
  }
  notes.push(newNote)
}

app.listen(3000, () => {
  console.log('Aplicacion iniciada por el puerto 3000')
})
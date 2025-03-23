import express from 'express'
const app = express()
const port = 3000

function listener(req, res) {
    res.send('Hello World!')
}

app.get('/home' , listener)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
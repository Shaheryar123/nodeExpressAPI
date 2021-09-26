import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/users.js'
const app = express()
const PORT = 7000

app.use(bodyParser.json())

app.get('/', (req, res) =>res.send('Hello from HP'))

app.use('/users',router)
app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`))

import express from 'express'
import {v4 as uuidv4} from 'uuid'

const router = express.Router()

let users = []

router.get('/', (req, res) => res.send(users))

router.post('/', (req,res) => {
    const user = req.body

    users.push({...user,id: uuidv4()})
    res.send(users)
})

router.get('/:id', (req, res) =>
{
    const { id } = req.params
    const findID = users.find((user) => user.id === id)
    res.send(findID)
})

router.delete('/:id', (req, res) =>
{
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with ID ${id} has been deleted from database`)

})

export default router
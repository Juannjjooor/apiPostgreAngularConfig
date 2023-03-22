import axios from 'axios'
import express from 'express'
import userRouter from './routes/user.routes'

const app = express()
app.use(express.json())

const PORT = 8532

app.get('/ping', (_req, res) => {
    console.log('Han hecho pin!!!')
    const MESSAGE : string = 'Pong'
    res.send(MESSAGE)
})

app.use('/api/users', userRouter)

app.get('/users/count', (_req, res) => {
    console.log('Contando usuarios...')
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let users = response.data
            if(!!users)
            res.json(200).send(users.length)
            else
            res.json(204).send(0)
        })
        .catch(error => {
            res.status(404).send(error)

        })
})

app.get('/users/get/:id', (req, res) => {
    console.log('Buscando usuario...');
    axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
    .then((response) => {
        res.json(response.data);
        
         
    })
    .catch(error => {
        res.status(404).send(error)
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto $(PORT)`)
})



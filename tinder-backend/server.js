import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'


//App config
const app = express();
const port = process.env.Port || 8001
const connection_url = `mongodb+srv://neilsahai:nsahai4@cluster0.rpvhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Middleware
app.use(express.json());
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useCreateInde: true, 
    useUnifiedTopology: true, 

})

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello"));
app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) =>{
    Cards.find((err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))
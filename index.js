const express = require (`express`);
const server = express();
const vagas = require('./src/data/vagas.json');
const router = express.Router();
const fs = require('fs');

server.use(express.json({extended:true}))

const readFile = () => {
    const content = fs.readFileSync('.data/vagas.json','utf-8')
    return JSON.parse(content)
}

const writeFile = (content) =>{
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/vagas.json', JSON.stringify(currentContent), 'utf-8')
}


router.get(`/`, (req,res) => {
    const content = readFile()
    res.send(content)
})

server.post(`/:id`, (req,res) => {
    const {estado} = req.body
    const currentContent = readFile()
    currentContent.push({estado})
    writeFile(currentContent)
    res.send({estado})
});

server.put(`/:id`, (req,res) => {
    const {id} = req.params

    const {estado} = req.body
    
    const currentContent = readFile()
    const selectdItem = currentContent.find((vagas) => vagas.id === id)

    const {estado: cEstado} = currentContent[selectdItem]

    const newObject = {
        id: cId,
        estado: estado ? estado: cEstado
    }

    currentContent[selectdItem] = newObject
    writeFile(currentContent)


    res.send(currentContent)

});


server.delete(`/:id`, (req,res) => {
    const {id} = req.params
    const currentContent = readFile()
    const selectdItem = currentContent.find((vagas) => vagas.id === id)
    currentContent.splice(SelectedItem, 1)
    res.send(currentContent)
});

server.listen(3000, () => {
    console.log(`essa desgraca esta funcionando`)
});


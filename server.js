import express from "express";
import dados from "./src/data/dados.js";
const {varinhas} = dados;
const {animais} = dados;
const {pocoes} = dados;

const app = express();

const serverport = 3002

app.get("/",(req,res) => {
    res.send("Minha API de harry potter está ativa");
});

app.get("/varinhas", (req, res) => {
    res.json(varinhas);
});
app.get("/animais", (req, res) => {
    res.json(animais);
});
app.get("/pocoes", (req, res) => {
    res.json(pocoes);
});

app.get("/varinhas/:id", (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);

    const varinha = varinhas.find(b => b.id === id);

    if(varinha){
        res.status(200).json(varinha)
    }else{
        res.status(404).json({
            erro: "Essa varinha não foi encontrada"
        });
    }
});
app.get("/animais/:id", (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);

    const animal = animais.find(b => b.id === id);

    if(animal){
        res.status(200).json(animal)
    }else{
        res.status(404).json({
            erro: "Esse animal não foi encontrado"
        });
    }
});
app.get("/pocoes/:id", (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);

    const pocao = pocoes.find(b => b.id === id);

    if(pocao){
        res.status(200).json(pocao)
    }else{
        res.status(404).json({
            erro: "Esse animal não foi encontrado"
        });
    }
});


app.listen(serverport, () => {
    console.log(`Meu servidor está funcionando na porta http://localhost:${serverport}`)
});
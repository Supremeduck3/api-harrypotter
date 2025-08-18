import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();

const serverport = 3000

app.get("/",(req,res) => {
    res.send("Minha API de harry potter está ativa")
})
app.get("/bruxos", (req, res) => {
    res.json(bruxos)
})
//------------------------------------------------------------------------------
app.get("/bruxos/:id", (req, res) => {
    let id = parseInt(req.params.id)
    const bruxo = bruxos.find (b => b.id === id);
    if (bruxo) {
        res.json({
            success: true,
            message: `Bruxo ${bruxo.nome} encontrado! ⚡`,
            data: bruxo
        });
    } else {
        res.status(404).json({
            success: false,
            error: "Bruxo não encontrado ",
            message: `Nenhum bruxo com ID ${id} foi encontrado`,
            codigo: "WIZARD_NOT_FOUND"
        });
    }
});

app.listen(serverport, () => {
    console.log(`Meu servidor está funcionando na porta http://localhost:${serverport}`)
})
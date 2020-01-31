const express = require('express');


const server = express();

const projects = [{
        id: "1",
        title: "Novoprojeto",
        tasks: [
            "teste"
        ]
    } 
];

server.use(express.json());

server.get("/projects", (req, res) => {
    return res.json(projects);
});
server.post("/projects", (req, res) => {
    const { id, title, tasks } = req.body;
    const project = { id, title, tasks };
    projects.push(project);

    return res.json(projects);
});
server.post("/projects/:id/tasks", (req, res) => {
    const id = req.params.id;
    const project = findProject(id);
    if (project){
        const {title } = req.body;
        project.tasks.push(title);

        return res.json(projects);
    }

    return res.status(404).json({ error: "Projeto não existe"});
});

server.put("/projects/:id", (req, res) => {
    const id = req.params.id;
    const project = findProject(id);
    if (project){
        const {title } = req.body;
        project.title = title;

        return res.json(projects);
    }

    return res.status(404).json({ error: "Projeto não existe"});
});

server.delete("/projects/:id", (req, res) => {
    const id = req.params.id;
    const index = findProjectIndex(id);
    if (index >= 0){
        projects.splice(index, 1);

        return res.json(projects);
    }

    return res.status(404).json({ error: "Projeto não existe"});
});

 function findProject(id) {
    for (const item of projects) {
        if (item.id === id){
            return item;
        }
    };

     return null;
 }

 function findProjectIndex(id) {
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.id === id){
            return i;
        }
    }

    return -1;
 }

 // Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

// Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
 
server.listen(3000);
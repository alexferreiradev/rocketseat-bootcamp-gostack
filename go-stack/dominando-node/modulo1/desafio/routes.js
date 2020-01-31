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
const projectNotFoundJson = { error: "Projeto não existe"};
// Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
function verificaId (req, res, next) {
    const { id } = req.params;
    const index = findProjectIndex(id);
    if (index >= 0){
        req.project = projects[index];
        req.index = index;

        return next();
    }

    return res.status(404).json(projectNotFoundJson);
 }

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

// server.use(verificaId);

server.post("/projects/:id/tasks", verificaId, (req, res) => {
    const id = req.params.id;
    const {project} = req;
    if (project){
        const {title } = req.body;
        project.tasks.push(title);

        return res.json(projects);
    }

    return res.status(500).json(projectNotFoundJson);
});

server.put("/projects/:id", verificaId, (req, res) => {
    const id = req.params.id;
    const {project} = req;
    if (project){
        const {title } = req.body;
        project.title = title;

        return res.json(projects);
    }

    return res.status(500).json(projectNotFoundJson);
});

server.delete("/projects/:id", verificaId, (req, res) => {
    const id = req.params.id;
    const {index} = req;
    if (index >= 0){
        projects.splice(index, 1);

        return res.json(projects);
    }

    return res.status(500).json();
});

 function findProjectIndex(id) {
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.id === id){
            return i;
        }
    }

    return -1;
 }

// Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
 
server.listen(3000);
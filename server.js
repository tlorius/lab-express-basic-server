const express = require("express");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.json());
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (request, response) => {
  response.json(projects);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.use((request, response, next) => {
  response.status(404).sendFile(__dirname + "/views/not-found.html");
});
/*app.get("/api/books", (_, response) => {
  const books = [
    { title: "Rick&Morty", pages: 35 },
    { title: "Solo Leveling", pages: 150 },
    { title: "Arslan", pages: 150 },
  ];

  response.json(books);
});*/

app.listen(5005, () => console.log("My first app listening on port 5005!"));

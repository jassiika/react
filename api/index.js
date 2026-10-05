const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  {
    id: "1",
    title: "Learn Express.js",
    description: "Understand REST API routes and HTTP methods",
    completed: false,
    createdAt: new Date()
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Task API is running!");
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// GET one task
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
});

// CREATE task
app.post("/api/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const newTask = {
    id: uuidv4(),
    title,
    description: description || "",
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// UPDATE task
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE task
app.delete("/api/tasks/:id", (req, res) => {
  const taskExists = tasks.some((task) => task.id === req.params.id);

  if (!taskExists) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks = tasks.filter((task) => task.id !== req.params.id);

  res.json({
    message: "Task deleted successfully"
  });
});


module.exports = app;
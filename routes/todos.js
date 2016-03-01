'use strict';

import express from 'express';

const { Router } = express;
const todosRouter = new Router();

const todos = [];

todosRouter.get('/', (req, res, next) => {
  res.json(todos);
})

todosRouter.get('/:id', (req, res, next) => {
  let todo = todos[req.params.id];
  if(!todo) {
    res.sendStatus(404);
  } else{
    res.json(todo);
  }
});

export default todosRouter;

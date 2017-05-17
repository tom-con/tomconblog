const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js')

router.get('/', function(req, res, next) {
  knex('posts')
    .then((posts) => {
      res.status(200).send(posts);
    })
});

router.get('/:id', function(req, res, next) {
  knex('posts')
    .where('id', req.params.id)
    .first()
    .then((post) => {
      res.status(200).send(post);
    })
});

router.post('/', function(req, res, next) {
  knex('posts')
    .insert(req.body, '*')
    .then((posts) => {
      res.status(200).send(posts[0]);
    })
});

module.exports = router;

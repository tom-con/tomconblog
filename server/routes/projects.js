const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js')

router.get('/', function(req, res, next) {
  knex('projects')
    .select('*')
    .orderBy('id', 'DESC')
    .limit(req.query.limit ? req.query.limit : 20)
    .then((projects) => {
      res.status(200).send(projects);
    })
});

router.get('/:id', function(req, res, next) {
  knex('projects')
    .where('id', req.params.id)
    .first()
    .then((post) => {
      res.status(200).send(post);
    })
});

module.exports = router;

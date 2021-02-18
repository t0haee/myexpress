const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    book.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult[0]);
        response.json(dbResult[0]);
      }
    });
  } else {
    book.getbook(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult);
        response.json(dbResult);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  book.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.insertId); //palauttaa insertId arvon. defaulttina oli request.body, jolloin palauttaa sisällön mitä ollaan luotu.
    }
  });
});


router.delete('/:id', 
function(request, response) {
  book.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  book.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult); //määärittää mitä näyetään, kun toiminto suoritetaan.
    }
  });
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

router.get('/', async (req, res, next) => { // async convierte el resultado en una promesa
    /**
     * Con callback
     */
    /*Agente.find().exec((err, docs) => {
      if (err) {
        next(err);
        return;
      }
      // si no ha habido error
      res.json({ success: true, result: docs });
    });*/
  
    /**
     * Con promesa
     */
    /*Agente.find().exec().then(docs => {
      res.json({ success: true, result: docs });
    }).catch(err => {
      next(err);
      return;
    });*/
  
    // Con async/await
    try {
  
      // recogemos parámetros de entrada
      const nombre = req.query.nombre;
      const precio = req.query.precio;
      const skip = parseInt(req.query.skip);
      const limit = parseInt(req.query.limit);
      const sort = req.query.sort;
      const fields = req.query.fields;
  
      console.log(req.query)
  
      const filtro = {};
  
      if (typeof nombre !== 'undefined') { // si me piden filtrar por nombre...
        filtro.nombre = nombre; // lo añado al filtro
      }
  
      if (typeof precio !== 'undefined') {
        filtro.precio = precio;
      }
  
      const docs = await Anuncio.listar(filtro, skip, limit, sort, fields); // si usamos await, la función donde estoy
                                          // debe tener async
      
      res.json({ success: true, result: docs });  
    } catch(err) {
      next(err);
      return;
    }  
  });

  module.exports = router;
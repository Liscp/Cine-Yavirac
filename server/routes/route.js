require('dotenv').config()
const express = require('express');
const router = express.Router();
const usuario = require('../db/request')
var path = require('path');

router.get("/home",(req, res)=>{
    res.json('casa')
    
})

router.get("/cartelera", (req, res)=>{
    usuario.formatoUsuario.findAll().then(libro => {
        JSON.stringify(libro)===JSON.stringify([])?res.json('no hay usuario'):res.json(libro);
        console.log(libro)
      });
})
router.post('/user',(req,res)=>{

        usuario.formatoUsuario.create(req.body).then(jane => {
        res.status(200)
        res.json(jane)
      })
      
})
router.post('/user/update',(req,res)=>{

    usuario.formatoUsuario.update(req.body,{
        where: {
            titulo: req.body.titulo
        }
    }).then(jane => {
        res.status(200)
        res.json(jane)
      })
  })
router.post('/user/delete',(req,res)=>{
   
    usuario.formatoUsuario.destroy({
        where: {
            titulo: req.body.titulo
        }
      })
      });
      

module.exports = router;
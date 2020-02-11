require('dotenv').config()
const express = require('express');
const router = express.Router();
const usuario = require('../db/request')


router.get("/cartelera", (req, res)=>{
    usuario.formatoUsuario.findAll().then(libro => {
        JSON.stringify(libro)===JSON.stringify([])?res.json(libro):res.json(libro);
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
"use strict";
var express = require('express');
var router = express.Router();
var models = require('./db');

//登入
  router.post('/api/login',(req,res) => {
    var flag = false
    models.user.find(req.body,function(err,docs){
      if (err) {
        res.send(err);
      } else {
        for (var i in docs){
          flag = true
          break
        }
        if(flag){
          res.send(docs)
        } else {
          res.send('')
        }
      }
    })
  });

//注册
  router.post('/api/register',(req,res) => {
    models.user.create(req.body,function(err,docs){
      if (err) {
        res.send(err);
      } else {
        res.send('successed!');
      }
    })
  });

//添加新员工
  router.post('/api/add',(req,res) => {
    if(req.body._id){
      models.info.update({_id:req.body._id},{$set:req.body},function (err,docs) {
        if (err) {
          res.send(err);
        } else {
          console.log("修改成功")
          res.send(docs)
        }
      })
    } else {
        models.info.create(req.body,function (err,docs) {
          if (err) {
            res.send(err);
          } else {
            console.log("添加成功")
            res.send(docs)
          }
        })
      }
  })

//查询员工信息
  router.post('/api/search', (req,res) => {
    models.info.find({"$or": req.body}, function(err,docs){
      if(err){
        res.send(err)
      } else {
        res.send(docs)
      }
    })
  })

//修改员工信息
  router.get('/api/add/:id', (req,res) => {
    models.info.findOne({_id:req.params.id},function(err,docs){
      if (err) {
        res.send(err);
      } else {
        console.log(docs)
        res.send(docs);
      }
    })
  })

//员工列表初始化
  router.post('/api/list', (req,res) => {
    console.log(req.body)
    models.info.find(req.body, function (err, docs) {
      if (err) {
        res.send(err)
      } else {
        res.send(docs)
      }
    })
  })

//删除员工
  router.post('/api/delete', (req,res) => {
    models.info.remove(req.body, function (err,docs) {
      if(err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    })
  })

module.exports = router;

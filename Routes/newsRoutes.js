'use strict'

const express = require('express');
const router = express.Router();
const newsController = require('../Controllers/newsController');

router.post('/createnews', newsController.createNews);
router.get('/getnews/:id', newsController.getNews);
router.get('/getallnews', newsController.getAllNews);
router.patch('/updatenews', newsController.updateNews);
router.delete('/deletenews/:id', newsController.deleteNews);

module.exports = router;
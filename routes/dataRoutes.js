const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController')
const fetchController = require('../controllers/fetchController')
const editController = require('../controllers/editController')
const getItemController = require('../controllers/getItemController')
const deleteController = require('../controllers/deleteController')
router.post('/add', addController)
router.post('/get', fetchController)
router.post('/edit', editController)
router.post('/getItem', getItemController)
router.post('/delete', deleteController)
module.exports = router
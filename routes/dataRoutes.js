const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController')

router.post('/add', addController)
// router.post('/get', loginController)
// router.post('/edit', loginController)
// router.post('/delete', loginController)
module.exports = router
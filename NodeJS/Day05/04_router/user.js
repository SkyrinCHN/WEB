const express = require('express');
var router = express.Router();
router.get('/list', (req, res) => {
    res.send('用户列表');
})
router.get('/delete', (req, res) => {
    res.send('删除列表');
})
router.get('/update', (req, res) => {
    res.send('修改列表');
})
module.exports = router;

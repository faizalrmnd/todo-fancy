var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/isUser');

/* GET users listing. */
router.get('/:id',auth.isUser, userController.getList);
router.post('/:id/addtodo',auth.isUser, userController.addList);
router.post('/:id/done',auth.isUser, userController.finish);
router.post('/:id/remove',auth.isUser, userController.remove);

module.exports = router;

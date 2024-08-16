const express = require('express');
const router = express.Router();
const cifController = require('../controllers/cifController');

router.post('/cif', cifController.createCIF);
router.get('/cif', cifController.getAllCIF);
router.get('/cif/:id', cifController.getCIFById);
router.put('/cif/:id', cifController.updateCIF);
router.delete('/cif/:id', cifController.deleteCIF);

module.exports = router;

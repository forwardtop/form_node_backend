const { body } = require('express-validator');

exports.validateCIF = [
    body('clientAccount').notEmpty().withMessage('Client account is required'),
    body('approvedCredit').notEmpty().withMessage('Approved credit is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    // Add other validation rules as needed
];

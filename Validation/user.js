const  {body, validationResult} = require('express-validator');

exports.userRegister = [
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({min : 5}),    
]

exports.userLogin = [
    body('email').isEmail()
]
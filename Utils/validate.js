const { validationResult , body} = require("express-validator");

exports.checkInputError = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        const errors = new Error("Entered data is incorrect");
        errors.statusCode = 401;
        errors.data = error.array();
        throw errors;
    }
};
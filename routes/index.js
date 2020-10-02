'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    function calculate(method, x, y) { //Function to do calculations for the calculator
        let var1 = parseFloat(x)//Parses X into a float, to allow for decimals
        let var2 = parseFloat(y)//Parses Y into a float, also to allow decimals
        let result;//Variable to store result
        var symbol;//Variable to store symbol
        switch (method) {//Switch on the method to perform operation
            case "add"://Addition case
                {
                    result = var1 + var2;//Adds x and y
                    symbol = "+"//Symbol is +
                    break;//Necessary break to prevent dropthrough
                }
            case "subtract"://Subtraction
                {
                    result = var1 - var2;
                    symbol = "-"
                    break;
                }
            case "multiply"://Multiplication
                {
                    result = var1 * var2;
                    symbol = "*"
                    break;
                }
            case "divide"://Division
                {
                    result = var1 / var2;
                    symbol = "/"
                    break;
                }
            default://Default in case its something else....like integrals or derivatives or something. I got to figure out advanced calculus
                {
                    result = "none";
                    break;
                }
        }
        if (result == "none") {
            return "ERROR! Invalid operation Input"//Error message
        } else {
            return var1 + symbol + var2 + "=" + result//Not so error message
        }
    }
    console.log(calculate(req.query.method, req.query.x, req.query.y));//Print the result
});

module.exports = router;

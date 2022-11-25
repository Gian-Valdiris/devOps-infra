"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.port;
app.use('/saludo', function (req, res) {
    return res.send("\n    <h1>\n      Hola este es el punto inicial de mi app\n    </h1>\n  ");
});
app.listen(port, function () {
    console.log('server corriendo');
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.port;
app.use('/saludo', (req, res) => {
    return res.send(` 
    <h1>
      Hola este es el punto inicial de mi app
    </h1>
  `);
});
app.listen(port, () => {
    console.log('server corriendo');
});

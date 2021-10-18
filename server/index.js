const express = require('express');
const { calcRouter } = require("./routes/calc");
const app = express();
app.use(express.json());

app.use("/calc", calcRouter);

app.listen(5000, "127.0.0.1");



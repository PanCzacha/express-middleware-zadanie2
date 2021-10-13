const express = require('express');
const app = express();
app.use(express.json());

const checkIsInt = (val1, val2) => {
  const checkFirst = Number.isInteger(val1)
  const checkSecond = Number.isInteger(val2)
  return checkFirst && checkSecond;
}

app.post("/", (req, res) => {
  // console.log(req.body);
  const {dividend, divider} = req.body;
  const val1 = parseInt(dividend);
  const val2 = parseInt(divider)
  if(checkIsInt(val1, val2) === true) {
    val1 % val2 === 0
      ? res.json({values: [val1, val2], message: true})
      : res.json({values: [val1, val2], message: false})
  } else {
    res.json({message : `Któraś z podanych wartości nie jest liczbą! (lub brak podanej wartości)`})
  }
})


app.listen(5000, "127.0.0.1");



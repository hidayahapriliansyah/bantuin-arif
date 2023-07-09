const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run in http://localhost:${PORT}`);
});

app.post('/convert', (req, res) => {
  const { data: dollarInput } = req.body;

  const convertToRupiah = Number(dollarInput) * 15.000;

  res.json({ data: {
    result: convertToRupiah,
  }});
});
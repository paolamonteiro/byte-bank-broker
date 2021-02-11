const express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running...');
});

app.listen(PORT, HOST);

const stocks = [
  {
    id: "1",
    code: "AZUL4",
    description: "Azul SA Pref (AZUL4)",
    price: 40.0
  },
  {
    id: "2",
    code: "ABEV3",
    description: "Ambev SA (ABEV3)",
    price: 15.0
  },
  {
    id: "3",
    code: "BBDC3",
    description: "Banco Bradesco SA (BBDC3)",
    price: 21.0
  },
  {
    id: "4",
    code: "ITUB4",
    description: "Itau Unibanco Banco Holding SA (ITUB4)",
    price: 28.0
  },
  {
    id: "5",
    code: "LREN3",
    description: "Lojas Renner SA (LREN3)",
    price: 41.0
  }
]

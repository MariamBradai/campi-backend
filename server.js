const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

const app = express()
app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))
app.use(express.json())

let countries = [
    {
        _id: '5fcc1422e17929040331de0e',
        title: 'Sousse',
        description: 'ctg_yuç_uj_i',
        photo: 'https://www.webdo.tn/wp-content/uploads/2018/11/Tunisie_Sousse-1.jpg',
        user: '5e74cd8c7e03d41011b9331a' 
    },
    {
      _id: '5e748a4b4c903807294d5aae',
      title: 'Tunis',
      description: 'fghugyg_uç_u',
      photo: 'https://www.sejours-tunisie.com/wp-content/uploads/2019/02/Tunis-avenue-habib-bourguiba-tunisie.jpg',
      user: '5e74cdf77e03d41011b9331b'
    }
];

app.get('/', (req, res) => {
    res.json({ message: "camp API " })
})

app.get('/countries', (req, res) => {
    res.json(countries)
})

app.post('/countries', (req, res) => {
    console.log(req.body);
    res.json({ received: 1 })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
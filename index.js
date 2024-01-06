require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const cors = require('cors');
const emailRoutes = require('./src/routes/emailRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Este es un mensaje de ejemplo desde la ruta GET');
});

app.use('/api', emailRoutes);


app.listen(PORT, () => {
    console.log(`Servidor Express en puerto ${PORT}`)
})
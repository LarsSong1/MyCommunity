const express = require('express')
const cors = require('cors');
const fs = require('node:fs')



const app = express()
const PORT = 3000


app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

app.get('/registros', (req, res) => {
    fs.readFile('events.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer los datos' })
        }

        try {
            const events = JSON.parse(data);
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error al procesar los datos de eventos' });
        }

    })
})



app.post('/registros', (req, res) => {
    const eventData = req.body; 

    fs.readFile('events.json', 'utf8', (err, data) => {
        let events = [];

        if (err) {
            events = [];
        } else {
            try {
                if (data) {
                    events = JSON.parse(data); 
                }
            } catch (error) {
                return res.status(500).json({ message: 'Error al procesar los datos de eventos existentes' });
            }
        }

        // Add the new event to the array
        events.push(eventData);

        // Save the updated events array to the JSON file
        fs.writeFile('events.json', JSON.stringify(events, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error al guardar los datos.' });
            }

            res.status(200).json({ message: 'Evento registrado correctamente.' });
        });
    });


})



app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})
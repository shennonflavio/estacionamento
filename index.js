// Importando lib Express
import express from 'express';
import { activityCheckin, activityCheckout, activityGet, activityRemove } from './src/controllers/activitiesControllers.js';
import { deleteVehicles, insertVehicles, listVehicles, updateVehicles } from './src/controllers/vehiclesControllers.js';

const port = 8000; // variável da porta de comunicação
const app = express();//habilita express a ser usado pela API


app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*"); //dentro do '*' poderia ser qual site poderia fazer a requisiçao.
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, origin, x-requested-with, accept, content-type, authorization ");
    next();
})


app.use(express.json());// permite o express a ler o formato JSON


// Endpoints de veiculos 
app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicles);
app.put('/api/vehicles/:id', updateVehicles);
app.delete('/api/vehicles/:id', deleteVehicles);


// endpoints activities
app.post('/api/activities/checkin', activityCheckin);
app.put('/api/activities/checkout', activityCheckout);
app.delete('/api/activities/:id', activityRemove);
app.get('/api/activities/', activityGet);



//Estabelece a comunicação com o endpoint
app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});
import express from 'express';

const port = 5000; 

const server = express(); //inizializziamo il server

server.use(express.json()); //diciamo al server di gestire i body di tipo JSON delle richieste
                            //(il body verrà convertito in un oggetto js)

// #### DEFINIAMO LE ROTTE DEL NOSTRO SERVER #### //

const router = express.Router(); //in questo modo potrò prendere il file ed esportarlo

router.get('/', (request, response) => {
    //response.send(request.query); per recuperare i valori della query string
     response.send({ saluto: 'ciao a tutti'})
});

//seguono altri esempi, anche con POST e PUT, la seguente ha sintassi simile al primo GET
router.get('/users/:id', (request, response) => {
     const id = request.params.id; //per recuperare i parametri dichiarati nel percorso
     //oppure const {id} = request.params (descrupturing)
     response.send(`Qui andranno i dati del post con id ${id}`)
});

//con le POST, abbiamo il body, vediamo ora come leggerlo
router.post('/users', (request,response) => {
    response.send(request.body) //per recuperare i valori dal body della richiesta
});

//con il put ci interessa anche passare l'identificativo
router.put('/users/:id', (request, response) => {
    response.send(`Verrà modificato lo user con id ${request.params.id} e questi sono
        i nuovi dati: ${JSON.stringify(request.body)}`) 
});

router.delete('/users/:id', (request, response) => {
    response.send(`Verrà eliminato il post con id ${request.params.id}`)
});

server.use('/', router);

//metto il server in ascolto alla porta stabilita
server.listen(5000, () => {
    console.log(`Server is running at port ${port}`)
});


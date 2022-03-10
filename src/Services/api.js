import axios from 'axios'

// Base URL -> https://sujeitoprogramador.com/r-api/?api=filmes/

// r-api/?api=filmes/ ( todos os filmes )

// r-api/?api=filmes/123  ( puxando um unico filme, com seu ID unico)


const api = axios.create({
    baseURL:  'https://sujeitoprogramador.com'
});

export default api;
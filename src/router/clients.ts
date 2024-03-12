import express from 'express';
import { getAllClients, deleteClient, updateClient, createClient } from '../controllers/clients';
import { isAuthenticated, isOwner } from '../middlewares'; 

export default (router: express.Router) => {
    router.get('/clients', isAuthenticated, getAllClients);
    router.post('/clients', isAuthenticated, createClient);
    router.delete('/clients/:id', isAuthenticated, deleteClient);
    router.patch('/clients/:id', isAuthenticated, updateClient);
};
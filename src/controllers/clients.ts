import express from 'express';
import { clients } from '../db/clients';

export const getAllClients = async (req: express.Request, res: express.Response) => {
    try {
        const client = await clients.find();

        return res.status(200).json(client);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteClient = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedClient = await clients.findOneAndDelete({ _id: id });

        return res.json(deletedClient);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateClient = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { name, status } = req.body;

        if (!name || !status) {
            return res.sendStatus(400);
        }

        const client = await clients.findByIdAndUpdate(id, { name, status, updated_at: Date.now() }, { new: true });

        return res.status(200).json(client);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createClient = async (req: express.Request, res: express.Response) => {
    try {
        const { name, status } = req.body;

        if (!name || !status) {
            return res.sendStatus(400);
        }

        const newClient = await clients.create({ name, status });

        return res.status(201).json(newClient);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

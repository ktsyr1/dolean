import User from '../models/User.js';

export const createUser = async (req, res) => {
    try {
        const user = await User.findOne(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};
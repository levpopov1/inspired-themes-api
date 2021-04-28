import Collection from '../models/Collection.js';

function getAll(req, res){
    res.status(200).json(req.items);
}

function getOne(req, res){
    res.status(200).json(req.item);
}

async function post(req, res, next){
    try {
        const newCollection = await Collection.create(req.body);
        return res.status(200).json(newCollection);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
    getOne,
    post
}
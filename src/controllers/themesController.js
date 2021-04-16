const Theme = require('../models/Theme');

function getAll(req, res){
    res.status(200).json(req.items);
}

function getOne(req, res){
    res.status(200).json(req.item);
}

async function post(req, res, next){
    try {
        const newTheme = await Theme.create(req.body);
        return res.status(200).json(newTheme);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    post
}
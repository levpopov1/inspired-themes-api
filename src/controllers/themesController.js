import Theme from '../models/theme.js';

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

export {
    getAll,
    getOne,
    post
}
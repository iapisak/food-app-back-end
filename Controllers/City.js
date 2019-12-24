const db = require('../Models');

const getAllRestaurant = async (req, res) => {
    try {
        const allRestaurant = await db.City.find();
        return res.status(200).json({ status: 200, data: allRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not get any restaurant' });
    }
}

const getRestaurant = async (req, res) => {
    const postal_code = req.params.res_id
    try {
        const foundRestaurant = await db.City.findOne({ postal_code: postal_code });
        return res.status(200).json({ status: 200, data: foundRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not find this restaurant' });
    }
}

const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = await db.City.create(req.body);
        return res.status(200).json({ status: 200, data: newRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not create this restaurant'});
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const delRestaurant = await db.City.findOneAndDelete({ postal_code: postal_code });
        return res.status(200).json({ status: 200, data: delRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not delete restaureant'});
    }
}

module.exports = {
    getAllRestaurant,
    getRestaurant,
    createRestaurant,
    deleteRestaurant,
}
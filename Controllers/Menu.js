const db = require('../Models');

const getMenu = async (req, res) => {
    const restaurant_id = req.params.restaurant_id
    try {
        const foundMenu = await db.Menu.findOne({ restaurant_id: restaurant_id });
        return res.status(200).json({ status: 200, data: foundMenu });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not find Menu' });
    }
}

const createMenu = async (req, res) => {
    try {
        const newMenu = await db.Menu.create(req.body);
        return res.status(200).json({ status: 200, data: newMenu });
    } catch {
        return res.status(500).json({ status: 500, error: 'Cound not create Menu'});
    }
}

module.exports = {
    getMenu,
    createMenu,
}
const db = require('../Models');

const getRestaurant = async (req, res) => {
    const postal_code = req.params.res_id
    try {
        const foundRestaurant = await db.Restaurant.findOne({ restaurant: [ { postal_code: postal_code } ] });
        return res.status(200).json({ status: 200, data: foundRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not find this restaurant' })
    }
}

const createRestaurant = async (req, res) => {
    console.log(req.body)
    const newArray = {
        restaurant: [
            { 
                postal_code: req.body.postal_code,
                result: req.body.result
            }
        ]
    } 
    try {
        const newRestaurant = await db.Restaurant.create(newArray);
        return res.status(200).json({ status: 200, data: newRestaurant });
    } catch {
        return res.status(500).json({ status: 500, error: 'Could not create this restaurant'})
    }
}

module.exports = {
    getRestaurant,
    createRestaurant,
}
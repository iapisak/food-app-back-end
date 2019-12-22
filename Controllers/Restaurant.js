const db = require('../Models');

const requestAndCreateRestaurant = async (req, res) => {
    const postal_code = req.params.res_id
    try {
        const foundRestaurant = await db.Restaurant.findOne({ postal_code: postal_code });
        return res.status(200).json({ status: 200, data: foundRestaurant });
    } catch {
        const result = []
        fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${postal_code}?page=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "fe0837f0a2msh7cb5dab4b0d98c6p1b7249jsn44b6d3c3edbf"
            }
        })
        .then(res => {
            result = res.result.data
            const createNewRestaurant = db.Restaurant.create({ postal_code: postal_code, result });
            return res.status(200).json({ status: 200, data: createNewRestaurant });
        })
        .catch(err => console.log(err));
    }
}

module.exports = {
    requestAndCreateRestaurant,
}
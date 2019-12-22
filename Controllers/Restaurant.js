const db = require('../Models');

const requestAndCreateRestaurant = async (req, res) => {
    const zipcode = req.body.zipcode
    try {
        const foundRestaurant = await db.Restaurant.findOne({ postal_code: zipcode });
        return res.status(200).json({ status: 200, data: foundRestaurant });
    } catch {
        const newData;
        fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${zipcode}?page=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "fe0837f0a2msh7cb5dab4b0d98c6p1b7249jsn44b6d3c3edbf"
            }
        })
        .then(response => newData = response.result.data)
        .catch(err => console.log(err));

        const createNewRestaurant = await db.Restaurant.create(newData);
        return res.status(200).json({ status: 200, data: createNewRestaurant });
    }
}

module.exports = {
    requestAndCreateRestaurant,
}
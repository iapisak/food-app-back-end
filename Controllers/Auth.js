const bcrypt = require('bcryptjs');
const db = require('../Models');

const login = async (req, res) => {
    try {
        const getUser = await db.User.findOne( { email: req.body.email } );
        const isMatch = await bcrypt.compare(req.body.password, getUser.password);
        if (isMatch) {
            req.session.currentUser = getUser.id
            return res.status(200).json({ status: 200, id: getUser.id });
        } else {
            return res.status(500).json({ status: 500, error: 'Invalid password'});
        }
    } catch {
        return res.status(500).json({ status: 500, error: 'Invalid Email' });
    }
}

const logout = async (req, res) => {
    try {
        req.session.destroy()
        return res.status(200).json({ status: 200, message: 'Success Logout' });
    } catch {
        return res.status(500).json({ status: 500, error: 'Something wrong, Please try again' });
    }
}

const signup = async (req, res) => {
    try {
        const getUser = await db.User.findOne({ email: req.body.email });
        if (getUser) {
            return res.status(500).json({ status: 500, error: 'Invalid Email'})
        } else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            const createUser = { ...req.body, password: hash }
            const user = db.User.create({ createUser })
            return res.status(200).json({ status: 200, id: user._id})
        }
    } catch {
        return res.status(500).json({ status: 500, error: 'Something went wrong, Please try again' })
    }
}

module.exports = {
    login,
    logout,
    signup,
}



const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const user = await User.create({ username, email, password, role });
        const token = generateToken(user._id);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// exports.protected = (req, res) => {
//     res.status(200).json({ message: 'Protected route accessed' });
// };
// Handler for protected routes
exports.protected = (req, res, next) => {
    if (req.user) {
        res.status(200).json({
            message: 'Protected route accessed',
            user: {
                username: req.user.username,
                email: req.user.email
            }
        });
    } else {
        res.status(401).json({ message: 'Not authorized' });
    }
};
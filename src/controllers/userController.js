const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body.name, req.body.password); // Cambié 'username' por 'name'
        res.json(user);
    } catch (err) {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};

module.exports = { register, login };

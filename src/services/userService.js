const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (userData) => {
    const { name, password, email } = userData;  
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, password: hashedPassword, email });  
    await user.save();
    return user;
};

const loginUser = async (name, password) => {  
    const user = await User.findOne({ name });  
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    }
    throw new Error('Invalid credentials');
};

module.exports = { registerUser, loginUser };

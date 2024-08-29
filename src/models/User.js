const mongoose = require('mongoose');

// Definición del esquema del usuario
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true  // Esto añade automáticamente los campos createdAt y updatedAt
});

// Creación del modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;

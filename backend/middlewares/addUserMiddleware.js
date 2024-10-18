const jwt = require('jsonwebtoken');

const addUserMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        try {
            const decoded = jwt.decode(token);
            req.body.user = decoded.name || 'usuario_hardcoded';
        } catch (error) {
            console.error('Error decoding token:', error);
            req.body.user = 'usuario_hardcoded';
        }
    } else {
        req.body.user = 'usuario_hardcoded';
    }
    next();
};

module.exports = addUserMiddleware;
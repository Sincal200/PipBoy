const addUserMiddleware = (req, res, next) => {
    req.body.user = 'usuario_hardcoded'; // Hardcodear el usuario aquí
    next();
};

module.exports = addUserMiddleware;
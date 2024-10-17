const addUserMiddleware = (req, res, next) => {
    req.body.user = req.body.user || 'usuario_hardcoded'; // Obtener el usuario de la solicitud
    next();
};

module.exports = addUserMiddleware;
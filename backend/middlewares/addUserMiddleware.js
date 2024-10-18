let globalUsername = 'usuario_hardcoded'; // Variable global para almacenar el nombre de usuario

const addUserMiddleware = (req, res, next) => {
    req.body.user = globalUsername;
    next();
};

module.exports = addUserMiddleware;
const addUserMiddleware = (req, res, next) => {
  const userName = req.session.userName; // Obtener el nombre del usuario desde la sesión
  if (userName) {
    req.body.user = userName; // Añadir el nombre del usuario al cuerpo de la solicitud
  } else {
    req.body.user = 'usuario_hardcoded'; // Valor por defecto si no se encuentra el nombre del usuario
  }
  next();
};

module.exports = addUserMiddleware;
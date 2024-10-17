const addUserMiddleware = (req, res, next) => {
  const user = req.session.userName; // Obtener el nombre del usuario desde la sesión
  if (user) {
    req.body.user = user; // Añadir el nombre del usuario al cuerpo de la solicitud
  } else {
    req.body.user = 'usuario_hardcoded'; // Valor por defecto si no se encuentra el nombre del usuario
  }
  next();
};

module.exports = addUserMiddleware;
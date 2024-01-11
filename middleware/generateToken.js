const jwt = require('jsonwebtoken');

exports.generateToken = (id, role) => {
  const token = jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '6h',
  });
  console.log('token '   +  token);
  return token;
};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(400).json({ message: 'Wrong email or password.' });
    }
    bcrypt.compare(password, admin.password, (err, isEqual) => {
      if (isEqual === true) {
        const token = jwt.sign({
          email, adminId: admin.id
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Logged In successfuly!', token });
      } else {
        res.status(400).json({ message: 'Wrong email or password.' });
      }
    })
  } catch (err) {
    const error = new Error();
    error.statusCode = 400;
    next(error);
  }
}

// Main admin only

// exports.signup = (req, res) => {
//   const { email, password } = req.body;
//   try {
//     bcrypt.hash(password, 12, async (err, hash) => {
//       if (err) throw err;
//       await Admin.create({ email, password: hash });
//       return res.status(200).json({ message: 'Success!' });
//     });
//   } catch (error) {
//     res.status(400).json({ message: 'An error occured.' });
//   }
// }
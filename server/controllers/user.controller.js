import jwt from 'jsonwebtoken';

import User from '../model/user.model.js';

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );
};

export const signup = async (req, res) => {
  const { fullname, email, password, mobile } = req.body;

  try {
    const emailExists = await User.findOne({ email });
    const mobileExists = await User.findOne({ mobile });

    if (emailExists) {
      return res
        .status(400)
        .json({ message: 'User already exists with this email.' });
    } else if (mobileExists) {
      return res
        .status(400)
        .json({ message: 'User already exists with this mobile number.' });
    }

    const user = await User.create({ fullname, email, password, mobile });
    const token = generateToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (user.role !== 'admin') {
      return res
        .status(403)
        .json({ message: 'You are not authorized to login' });
    }

    const token = generateToken(user);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

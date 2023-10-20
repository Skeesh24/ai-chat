import { compare, hash } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import User from '../models/user-schema.js';
import { createToken } from '../utils/tokens.js';

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: 'OK', data: users });
  } catch (error) {
    return res.status(400).json({ message: 'ERROR', cause: error });
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let { name, email, password } = req.body;

  if (await User.findOne({ email: email }))
    return res.status(409).json({
      message: 'CONFLICT',
      detail: 'User with this credentials already exists.',
    });

  password = await hash(password, Number.parseFloat(process.env.SALT_ROUNDS));

  const user = new User({ name, email, password });

  try {
    await user.save();
  } catch (error) {
    if (error.toString().includes('E11000')) {
      return res
        .status(409)
        .json({ message: 'CONFLICT', detail: 'duplicate key error' });
    }
  }

  return res.status(201).json({ message: 'CREATED', id: user._id.toString() });
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(400)
      .json({ message: 'BAD REQUEST', detail: 'incorrect login or password' });
  }

  if (!(await compare(password, user.password)))
    return res
      .status(400)
      .json({ message: 'BAD REQUEST', detail: 'incorrect login or password' });

  res.clearCookie(process.env.JWT_COOKIE_NAME, {
    httpOnly: true,
    domain: process.env.SERVER_DOMAIN,
    signed: true,
  });

  const token = createToken(user.id, user.email, process.env.JWT_EXPIRES_DAYS);
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);

  res.cookie(process.env.JWT_COOKIE_NAME, token, {
    httpOnly: true,
    path: process.env.COOKIE_PATH,
    expires: expires,
    domain: process.env.SERVER_DOMAIN,
    signed: true,
  });

  return res.status(201).json({ message: 'OK', id: user.id });
};

export const userDelete = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.body;

  const user = await User.findByIdAndDelete(id);

  return res.status(204).send();
};

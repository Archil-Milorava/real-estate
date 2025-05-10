import Joi from "joi";

const signUpSchema = Joi.object({
  nickName: Joi.string().min(2).max(255).required(),
  password: Joi.string().min(6).max(255).required(),
});

export const signUpValidator = (credentials) =>
  signUpSchema.validate(credentials, { abortEarly: false });

const LoginSchema = Joi.object({
  nickName: Joi.string().min(2).max(255).required(),
  password: Joi.string().min(0).max(255).required(),
});

export const logInValidator = (credentials) =>
  LoginSchema.validate(credentials, { abortEarly: false });

import { Request, Response } from 'express';

import { requireNonEmpty } from '@utils/objectUtils';
import UserService from '@services/UserService';
import UserParam from '@models/user/UserParam';

export async function postUserNew(req: Request, res: Response) {
  const param = new UserParam({
    email: requireNonEmpty(req.body.email),
    username: requireNonEmpty(req.body.username),
    password: requireNonEmpty(req.body.password),
  });

  const result = await UserService.signUpUser(param);
  return result;
};

export async function postSessionNew(req: Request, res: Response) {
  const param = new UserParam({
    email: requireNonEmpty(req.body.email),
    password: requireNonEmpty(req.body.password),
  });

  const result = await UserService.signInUser(param);
  return result; 
};

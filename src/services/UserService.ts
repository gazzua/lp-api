import { getCustomRepository } from 'typeorm';

import AppError from "@models/AppError";
import Cookie from '@models/Cookie';
import Crypt from '@modules/Crypt';
import { DB1 } from '@modules/Database';
import config from '@config/config';
import ResponseCode from '@constants/ResponseCode';
import Token from '@modules/Token';
import User from '@entities/User';
import UserParam from '@models/user/UserParam';
import UserSignInResult from '@models/user/UserSignInResult';
import UserSignUpResult from '@models/user/UserSignUpResult';
import { UserRepository } from '@repos/UserRepository';

export default class UserSignInService {
  public static async signInUser(param: UserParam) {
    try {
      const userRepo = getCustomRepository(UserRepository, DB1);
      const user = (await userRepo.find({
        select: [ 'username', 'password' ],
        where: {
          email: param.email,
        },
      }))[0];

      if (user === undefined) {
        throw AppError.of({
          args: [ param.email ],
          type: ResponseCode.USER_NOT_FOUND,
        });
      }

      const passwordMatch = await Crypt.compare({
        src: param.password, 
        hash: user.password,
      });
      
      if (passwordMatch === false) {
        throw AppError.of({
          args: [ param.email ],
          type: ResponseCode.USER_CREDENTIAL_INVALID,
        });
      }

      const token = await Token.create({
        payload: {
          username: user.username,
        },
      });
  
      return new UserSignInResult({
        user: {
          email: param.email,
        },
      }).setCookie(new Cookie({
        key: 'auth-token',
        maxAge: config.auth.tokenDuration,
        value: token,
      }));
    } catch (err) {
      throw err;
    }
  }

  public static async signUpUser(param: UserParam) {
    try {
      const userRepo = getCustomRepository(UserRepository, DB1);
      
      const user = await userRepo.find({
        where: {  
          email: param.email,
        },
      });
      if (user.length > 0) {
        throw AppError.of({
          type: ResponseCode.USER_ALREADY_REGISTERED,
        });
      }
      const hashedPassword = await Crypt.hash({
        data: param.password,
        hashSalt: config.auth.hashSalt,
      });

      const result = await userRepo.save(new User({
        email: param.email,
        password: hashedPassword,
        username: param.username,
      }));
      return new UserSignUpResult({
        user: {
          username: result.username,
        },
      });
    } catch (err) {
      throw err;
    }
  }
};

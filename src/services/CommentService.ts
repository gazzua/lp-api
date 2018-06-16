import { DB1 } from '@modules/Database';
import {getCustomRepository} from 'typeorm';
import { CommentRepository } from '@repos/CommentRepository';
import CommentAddParam from '@models/comment/CommentAddParam';
import CommentAddResult from '@models/comment/CommentAddResult';
import User from '@entities/User';

export default class CommentService {
  public static async addComment(param: CommentAddParam) {
    try {
      const commentRepo = getCustomRepository(CommentRepository, DB1);
      
      /// temp user setting
      const user = new User();
      user.id = 1;
      param.comment.user = user;
      
      const data = await commentRepo.save(param.comment);
      return new CommentAddResult(data);
    } catch (err) {

    }
  }
};
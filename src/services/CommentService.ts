import { DB1 } from '@modules/Database';
import {getCustomRepository} from 'typeorm';
import { CommentRepository } from '@repos/CommentRepository';
import CommentAddParam from '@models/comment/CommentAddParam';
import CommentAddResult from '@models/comment/CommentAddResult';
import CommentGetParam from '@models/comment/CommentGetParam';
import CommentGetResult from '@models/comment/CommentGetResult';
import User from '@entities/User';
import Vote from '@entities/Vote';

export default class CommentService {
  public static async addComment(param: CommentAddParam) {
    try {
      const commentRepo = getCustomRepository(CommentRepository, DB1);
      
      /// temp user setting
      const user = new User();
      user.id = 1;
      param.comment.user = user;

      const vote = new Vote();
      vote.downVoteCount = 0;
      vote.upVoteCount = 0;
      vote.targetType = 'C';
      vote.status = 'N';

      param.comment.vote = vote;
      const data = await commentRepo.save(param.comment);
      return new CommentAddResult(data);
    } catch (err) {
      throw err;
    };
  };

  public static async getComments(param: CommentGetParam) {
    try {
      const commentRepo = getCustomRepository(CommentRepository, DB1);

      const data = await commentRepo.find({ where: { targetType: param.targetType, targetId: param.targetId} });
      return new CommentGetResult(data);
    } catch (err) {
      throw err;
    }
  };
};
import { Request, Response } from 'express';

import CommentService from '@services/CommentService';
import { requireNonEmpty, optional } from '@src/utils/objectUtils';
import CommentAddParam from '@models/comment/CommentAddParam';
import CommentGetParam from '@models/comment/CommentGetParam';

export async function postCommentNew(req: Request, res: Response) {
  const param = new CommentAddParam({
    comment: requireNonEmpty(req.body.comment),
  });
  return CommentService.addComment(param);
}

export async function postComments(req: Request, res: Response) {
  const param = new CommentGetParam({
    targetType: requireNonEmpty(req.body.targetType),
    targetId: requireNonEmpty(req.body.targetId),
  });
  return CommentService.getComments(param);
}
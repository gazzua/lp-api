import { Request, Response } from 'express';

import CommentService from '@services/CommentService';
import { requireNonEmpty, optional } from '@src/utils/objectUtils';
import CommentAddParam from '@models/comment/CommentAddParam';

export async function postCommentNew(req: Request, res: Response) {
  const param = new CommentAddParam({
    comment: requireNonEmpty(req.body.comment),
  });
  return CommentService.addComment(param);
}
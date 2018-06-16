import { Request, Response } from 'express';

import { requireNonEmpty } from '@src/utils/objectUtils';
import VoteParam from '@models/vote/voteParam';
import VoteService from '@services/VoteService';

export async function upVote(request: Request, response: Response) {
  const param = new VoteParam({
    targetId: requireNonEmpty(request.body.targetId),
    targetType: requireNonEmpty(request.body.targetType),
    userId: request.body.userId,
  });

  return VoteService.upVote(param);
};

export async function downVote(request: Request, response: Response) {
  const param = new VoteParam({
    targetId: requireNonEmpty(request.body.targetId),
    targetType: requireNonEmpty(request.body.targetType),
    userId: request.body.userId,
  });
  return VoteService.downVote(param);
};
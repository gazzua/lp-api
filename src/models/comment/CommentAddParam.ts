import Comment from '@entities/Comment';

export default class CommentAddParam {
  public comment: Comment;

  constructor(param) {
    this.comment = param.comment;
  }

  values(): any {
    return {
      ...(this.comment ? {definition: this.comment} : {}),
    };
  }
};

import ApiResult from '@models/ApiResult';

export default class CommentGetResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};

import ApiResult from '@models/ApiResult';

export default class CommentAddResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};

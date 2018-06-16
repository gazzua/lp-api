import ApiResult from '@models/ApiResult';

export default class VoteResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};
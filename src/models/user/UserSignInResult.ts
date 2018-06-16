import ApiResult from '@models/ApiResult';

export default class UserSignInResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};

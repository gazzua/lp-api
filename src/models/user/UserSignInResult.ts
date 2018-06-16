import ApiResult from '@models/ApiResult';

export default class UserSignInResult extends ApiResult {
  public user;
  
  constructor(data) {
    super();
    this.user = data;
  }
};

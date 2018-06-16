import ApiResult from '@models/ApiResult';

export default class UserSignUpResult extends ApiResult {
  public user;

  constructor(data) {
    super();
    this.user = data;
  }
};

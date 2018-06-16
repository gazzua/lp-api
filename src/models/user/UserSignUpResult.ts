import ApiResult from '@models/ApiResult';

export default class UserSignUpResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};

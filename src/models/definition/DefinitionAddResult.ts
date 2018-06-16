import ApiResult from '@models/ApiResult';

export default class DefinitionAddResult extends ApiResult {
  public data;
  
  constructor(data) {
    super();
    this.data = data;
  }
};

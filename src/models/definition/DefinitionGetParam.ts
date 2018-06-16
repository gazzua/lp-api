export default class DefinitionGetParam {
  public definitionId: number;
  public limit: number;
  public offset: number;

  constructor(param) {
    this.definitionId = param.definitionId;
    this.limit = param.limit;
    this.offset = param.offset;
  }

  values(): any {
    return {
      ...(this.definitionId ? {definitionId: this.definitionId} : {}),
    };
  }
};

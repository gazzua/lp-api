export default class DefinitionGetParam {
  public targetType: string;
  public targetId: number;

  constructor(param) {
    this.targetType = param.targetType;
    this.targetId = param.targetId;
  }

  values(): any {
    return {
      ...(this.targetId ? {targetId: this.targetId} : {}),
    };
  }
};

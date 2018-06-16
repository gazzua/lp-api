import Definition from '@entities/Definition';

export default class DefinitionAddParam{
  public definition: Definition;

  constructor(param) {
    this.definition = param.definition;
  }

  values(): any {
    return {
      ...(this.definition ? {definition: this.definition} : {}),
    };
  }
};

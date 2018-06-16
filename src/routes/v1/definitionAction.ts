import { Request, Response } from 'express';

import DefinitionService from '@services/DefinitionService';
import { requireNonEmpty, optional } from '@src/utils/objectUtils';
import DefinitionAddParam from '@models/definition/DefinitionAddParam';
import DefinitionGetParam from '@models/definition/DefinitionGetParam';

export async function postDefinitionNew(req: Request, res: Response) {
  const param = new DefinitionAddParam({
    definition: requireNonEmpty(req.body.definition),
  });
  return DefinitionService.addDefinition(param);
}

export async function postDefinitions(req: Request, res: Response) {
  const param = new DefinitionGetParam({
    limit: optional(req.body.limit).orElse(10),
    offset: optional(req.body.offset).orElse(0),
    search: req.body.search,
  });
  
  return DefinitionService.getDefinitions(param);
};

export async function postDefinitionsDefinitionid(req: Request, res: Response) {
  const param = new DefinitionGetParam({
    definitionId: requireNonEmpty(req.params.definitionId),
  });
  return DefinitionService.getDefinitionById(param);
};
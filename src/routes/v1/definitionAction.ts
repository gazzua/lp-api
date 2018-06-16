import { Request, Response } from 'express';

import DefinitionService from '@services/DefinitionService';
import { requireNonEmpty } from '@src/utils/objectUtils';
import DefinitionAddParam from '@models/definition/DefinitionAddParam';

export async function postDefinitionNew(req: Request, res: Response) {
  const param = new DefinitionAddParam({
    definition: requireNonEmpty(req.body.definition),
  });
  return DefinitionService.addDefinition(param);
}
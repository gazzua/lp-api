import { DB1 } from '@modules/Database';
import {getCustomRepository} from 'typeorm';
import {DefinitionRepository} from '@src/repositories/DefinitionRepository';
import DefinitionAddParam from '@models/definition/DefinitionAddParam';
import DefinitionAddResult from '@models/definition/DefinitionAddResult';
import DefinitionGetParam from '@models/definition/DefinitionGetParam';
import DefinitionGetResult from '@models/definition/DefinitionGetResult';
import {TermRepository} from '@src/repositories/TermRepository';
import Term from '@entities/Term';
import Vote from '@entities/Vote';
import User from '@entities/User';

export default class DefinitionService {
  public static async addDefinition(param: DefinitionAddParam) {
    try {
      const termRepo = getCustomRepository(TermRepository, DB1);
      const checkTerm = await termRepo.findAndCount({label: param.definition.term.label});
      // temp user setting
      const user = new User();
      user.id = 1;
      if (checkTerm[1] === 0) {
        const term = new Term();
        term.label = param.definition.term.label;
        term.status = 'N';
        term.user = user;
        const insertedTerm = await termRepo.save(term)
        param.definition.term.id = insertedTerm.id;
      } else {
        param.definition.term.id = checkTerm[0][0].id;
      }

      param.definition.user = user;

      const vote = new Vote();
      vote.downVoteCount = 0;
      vote.upVoteCount = 0;
      vote.targetType = 'D';
      vote.status = 'N';

      param.definition.vote = vote;
      const definitionRepo = getCustomRepository(DefinitionRepository, DB1);
      const data = await definitionRepo.save(param.definition);
      return new DefinitionAddResult(data);
    } catch (err) {

    }
  }

  public static async getDefinitions(param: DefinitionGetParam) {
    try {
      const definitionRepo = getCustomRepository(DefinitionRepository, DB1);
      const data = await definitionRepo.find({
        skip: param.offset,
        take: param.limit,
      });
      const result = new DefinitionGetResult(data);
      return result;
    } catch (err) {
      // todos
    }  
  }

  public static async getDefinitionById(param: DefinitionGetParam) {
    try {
      const definitionRepo = getCustomRepository(DefinitionRepository, DB1);
      const data = await definitionRepo.findOne(param.definitionId);
      const result = new DefinitionGetResult(data);
      return result;
    } catch (err) {
      // todos
    }
  }
};
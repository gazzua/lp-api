import ApiURL from '@constants/ApiURL';
import * as UserAction from './userAction';
import * as DefinitionAction from './definitionAction';
import * as CommentAction from './commentAction';
import HttpMethod from '@constants/HttpMethod';

export default [
  {
    action: UserAction.postUserNew,
    method: HttpMethod.POST,
    path: ApiURL.USER_NEW,
  },
  {
    action: UserAction.postSessionNew,
    method: HttpMethod.POST,
    path: ApiURL.SESSION_NEW,
  },
  {
    action: DefinitionAction.postDefinitionNew,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITION_NEW,
  },
  {
    action: DefinitionAction.postDefinitions,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITIONS,
  },
  {
    action: DefinitionAction.postDefinitionsDefinitionid,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITIONS_$DEFINITIONID,
  },
  {
    action: CommentAction.postCommentNew,
    method: HttpMethod.POST,
    path: ApiURL.COMMENT_NEW,
  }
];

import { Router, Request, Response } from 'express';

import Logger from '@modules/Logger';
import responseHandler from '@middlewares/responseHandler';
import routeMap1 from './v1/routeMap.v1';

export default function (app) {
  const router1: Router = registerRoutes(routeMap1);
  
  app.use('/api/v1', router1);
  return app;
};

function registerRoutes(routeMap) {
  const router: Router = Router();
  routeMap.map((route) => {
    Logger.debug('Route is registered: [%s] %s', route.method, route.path);
    router[route.method](route.path, (req: Request, res: Response, next: Function) => {
      route.action(req, res)
        .then((payload) => responseHandler(payload, res))
        .catch(next);
    });
  });
  return router;
}

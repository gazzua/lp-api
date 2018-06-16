import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import AppStatus from '@constants/AppStatus';
import initialize from './initialize';
import Logger from '@modules/Logger';
import config from '@config/config';
import routes from '@routes/routes';

const app: express.Application = express();

const state = {
  status: AppStatus.LAUNCHING,
  dirname: __dirname,
};

initialize().then((res) => {
  state.status = AppStatus.LAUNCHED;
});

app.use(morgan('tiny'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  if (state.status === AppStatus.LAUNCHING) {
    res.send({
      message: 'App is launching. Reload after 15 seconds.',
    });
  } else if (state.status === AppStatus.DATABASE_ERROR) {
    res.status(500)
      .send({
        code: "123",
        message: "DBERROR",
      });
  } else {
    next();
  }
});
routes(app);

app.listen(config.app.port, function(err) {
  if (err) {
    return console.error(err);
  }
  Logger.info('Listening at port: %s', config.app.port);
});

export default app;
export {
  state,
};

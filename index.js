const logger = require('@cisl/zepto-logger');
const express = require('express');
const app = express();
const cogJson = require('./cog');

logger.setLogLevel(2);

app.set('port', cogJson.port);

app.get('/', (_, res) => {
  logger.info('hello world');
  res.json({done: true});
});

app.get('/log/:level?', (req, res) => {
  let level = 0;
  if (req.params.level !== undefined && !isNaN(parseInt(req.params.level))) {
    level = parseInt(req.params.level);
  }
  switch (level) {
    case 0:
      logger.error('error message');
      break;
    case 1:
      logger.warn('warning message');
      break;
    case 3:
      logger.debug('debug message');
      break;
    case 2:
    default:
      logger.info('info message');
      break;
  }
  res.json({done: true});
});

['SIGHUP', 'SIGUSR1', 'SIGUSR2'].forEach((signal) => {
  process.on(signal, () => {
    logger.info(`${signal} caught!`);
    if (signal === 'SIGHUP') {
      process.exit();
    }
  });
});

app.listen(app.get('port'), () => {
  logger.info(`Express server running at :${app.get('port')}`);
});


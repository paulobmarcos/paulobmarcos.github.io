import dotenv from 'dotenv';
import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';

// Start Environmental Variables Config
dotenv.config();

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;

const init = async () => {
  // Create Express App
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // Create NEXT.JS app
  const nextApp = next({ dev: isDev });
  const nextHandler = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    server.get('*', nextHandler);

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
};

init();

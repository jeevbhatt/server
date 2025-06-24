import dotenv from 'dotenv';
dotenv.config();

import app from './src/app';
import { envConfig } from './src/config/config';


function startServer() {
 const PORT = envConfig.portNumber;

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();

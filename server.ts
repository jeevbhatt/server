import dotenv from 'dotenv';
dotenv.config();

import app from './src/app';
import { envConfig } from './src/config/config';
import sequelize from './src/database/connection';

function startServer() {
 const PORT = envConfig.portNumber;

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

  sequelize.authenticate()
    .then(() => {
      console.log("Database connection established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
}

startServer();

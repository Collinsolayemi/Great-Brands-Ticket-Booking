import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { swaggerDefinition } from './swagger';
import { AppDataSource } from './src/datasource/datasource';

const app = express();

dotenv.config({ path: './.env' });

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Setup
const routeFolderPath = path.join(__dirname, '..', 'src', 'route');
const options = {
  swaggerDefinition,
  apis: [path.join(routeFolderPath, '*.ts')],
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
// app.use('/api/v1', authRouter);
// app.use('/api/v1', dictionaryRouter);

// app.use(errorMiddleware);

// Initialize Data Source and Start Server
AppDataSource.initialize()
  .then(async () => {
    app.listen(() => {});
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));

// Global Type Declaration for Express Request
//to add user to the req body globally
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

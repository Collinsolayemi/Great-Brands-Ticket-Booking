import 'reflect-metadata';
import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_DATABASE, DB_URL, DB_PASSWORD, NODE_ENV } =
  process.env;

console.log(DB_PASSWORD);

export const AppDataSource = new DataSource({
  type: 'mysql',
  url: DB_URL,
  host: DB_HOST,
  port: 3306,
  username: DB_USERNAME,
  password: NODE_ENV === 'production' ? DB_PASSWORD : '',
  database: DB_DATABASE,
  connectTimeout: 30000,
  entities: [],
  migrations: [__dirname + '../migration/*.ts'],
  synchronize: NODE_ENV === 'production' ? false : true,
});

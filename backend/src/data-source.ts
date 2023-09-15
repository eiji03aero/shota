import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const DBOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'shota-db',
  port: 5432,
  username: 'shota',
  password: 'password',
  database: 'shota',
  logging: true,
  entities: [__dirname + '/entities/*'],
  migrations: [__dirname + '/migrations/*'],
};

export const AppDataSource = new DataSource(DBOptions);

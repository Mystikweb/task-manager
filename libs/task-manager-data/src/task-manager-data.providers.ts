import { createConnection, Connection } from 'typeorm';
import { TaskItem, TaskProgressItem } from '.';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'task_manager',
      password: 'R0flth1s!',
      database: 'task_management',
      entities: [TaskItem, TaskProgressItem],
      synchronize: true,
    }),
  },
];

export const entityProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TaskItem),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'TASK_PROGRESS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TaskProgressItem),
    inject: ['DATABASE_CONNECTION'],
  }
];
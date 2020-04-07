import { Module } from '@nestjs/common';
import { TaskManagerDataService } from './task-manager-data.service';
import {
  databaseProviders,
  entityProviders,
} from './task-manager-data.providers';

@Module({
  imports: [],
  providers: [...databaseProviders, ...entityProviders, TaskManagerDataService],
  exports: [TaskManagerDataService],
})
export class TaskManagerDataModule {}

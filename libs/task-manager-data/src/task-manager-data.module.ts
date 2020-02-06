import { Module } from '@nestjs/common';
import { TaskManagerDataService } from './task-manager-data.service';

@Module({
  providers: [TaskManagerDataService],
  exports: [TaskManagerDataService],
})
export class TaskManagerDataModule {}

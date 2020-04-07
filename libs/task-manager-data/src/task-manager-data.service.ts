import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskItem, TaskProgressItem } from '.';

@Injectable()
export class TaskManagerDataService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<TaskItem>,
    @Inject('TASK_PROGRESS_REPOSITORY')
    private taskProgressRepository: Repository<TaskProgressItem>,
  ) {}

  getTaskList(): Promise<TaskItem[]> {
      return this.taskRepository.find({
          relations: ['progress_items']
      });
  }
}

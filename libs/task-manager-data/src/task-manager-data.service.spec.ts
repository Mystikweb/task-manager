import { Test, TestingModule } from '@nestjs/testing';
import { TaskManagerDataService } from './task-manager-data.service';

describe('TaskManagerDataService', () => {
  let service: TaskManagerDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskManagerDataService],
    }).compile();

    service = module.get<TaskManagerDataService>(TaskManagerDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

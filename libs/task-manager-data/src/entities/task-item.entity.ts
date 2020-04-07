import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TaskStatus, TaskProgressItem } from '.';

@Entity({
  name: 'tasks',
})
export class TaskItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.NOT_STARTED,
    nullable: false,
  })
  status: TaskStatus;

  @OneToMany(
    () => TaskProgressItem,
    taskItem => taskItem.task,
  )
  progress_items: TaskProgressItem[];
}

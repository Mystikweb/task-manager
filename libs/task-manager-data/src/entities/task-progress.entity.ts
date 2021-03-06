import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TaskItem, TaskStatus, IntervalUnit } from '.';

@Entity({
  name: 'task_progress_item',
})
export class TaskProgressItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'double',
    nullable: false,
  })
  time_length: number;

  @Column({
    type: 'enum',
    enum: IntervalUnit,
    default: IntervalUnit.MINUTES,
    nullable: false,
  })
  time_interval: IntervalUnit;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    nullable: false,
  })
  next_status: TaskStatus;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updated_at: Date;

  @ManyToOne(
    () => TaskItem,
    item => item.progress_items,
  )
  task: TaskItem;
}

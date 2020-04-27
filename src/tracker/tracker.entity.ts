/**
 * @desc 创建orm
 */
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Tracker {
  @ObjectIdColumn()
  _id: string;
  @Column()
  trackerNo: string;
  @Column()
  trackerContent: string;
}

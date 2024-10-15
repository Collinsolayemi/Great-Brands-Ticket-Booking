import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.schema';
import { Event } from './event.schema';

@Entity('waiting_list')
export class WaitingList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.waitingLists)
  user: User;

  @ManyToOne(() => Event, (event) => event.waitingLists)
  event: Event;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'boolean', default: false })
  notified: boolean;
}

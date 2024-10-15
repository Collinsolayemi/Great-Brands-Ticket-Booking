import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.schema';
import { WaitingList } from './waiting.schema';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Unique identifier for the event

  @Column({ type: 'varchar', length: 255 })
  title: string; // Title of the event

  @Column({ type: 'text' })
  description: string; // Description of the event

  @Column({ type: 'timestamp' })
  date: Date; // Date and time when the event occurs

  @Column({ type: 'integer' })
  totalTickets: number; // Total number of tickets available for the event

  @Column({ type: 'integer', default: 0 })
  bookedTickets: number; // Number of tickets booked for the event

  @Column({ type: 'boolean', default: false })
  isSoldOut: boolean; // Indicates if the event is sold out

  @OneToMany(() => Booking, (booking) => booking.event)
  bookings: Booking[]; // Reference to the bookings associated with this event

  @OneToMany(() => WaitingList, (waitingList) => waitingList.user)
  waitingLists: WaitingList[];
}

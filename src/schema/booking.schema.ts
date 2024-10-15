import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.schema';
import { Event } from './event.schema';

@Entity('bookings')
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string; // Unique identifier for the booking

    @ManyToOne(() => User, (user) => user.bookings, { eager: true })
    user: User; // Reference to the user making the booking

    @ManyToOne(() => Event, (event) => event.bookings, { eager: true })
    event: Event;

    @Column({ type: 'integer' })
    tickets: number; // Number of tickets booked

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    bookedAt: Date; // Date and time when the booking was made

    @Column({ type: 'boolean', default: true })
    isActive: boolean; // Status of the booking (active/cancelled)

    @Column({ type: 'timestamp', nullable: true })
    cancelledAt: Date; // Date and time when the booking was cancelled (if applicable)
}

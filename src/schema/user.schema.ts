import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.schema';
import { WaitingList } from './waiting.schema';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ type: 'varchar', length: 100 })
    firstName: string;

    @Column({ type: 'varchar', length: 100 })
    lastName: string; 

    @Column({ type: 'varchar', unique: true })
    email: string; 

    @Column({ type: 'varchar', length: 255 })
    password: string; 

    @Column({ type: 'varchar', length: 20, default: 'user' })
    role: string; 

    @OneToMany(() => Booking, (booking) => booking.user)
    bookings: Booking[]; 

    @OneToMany(() => WaitingList, (waitingList) => waitingList.user)
    waitingLists: WaitingList[]; 

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date; 

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date; 
}

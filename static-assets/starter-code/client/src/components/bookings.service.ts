// src/components/bookings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { EventService } from '../event/event.service';
import { BookingRepository } from './booking.repository.ts'; // Asegúrate de que esta ruta es correcta
import { BookingStatus } from './booking-status.enum.ts'; // Enum para los estados de la reserva

@Injectable()
export class BookingsService {
  constructor(
    private eventService: EventService,
    private bookingRepository: BookingRepository,
  ) {}

  async updateBookingStatus(bookingId: string, status: BookingStatus): Promise<void> {
    // Encuentra la reserva por su ID
    const booking = await this.bookingRepository.findOne(bookingId);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${bookingId} not found`);
    }

    // Actualiza el estado de la reserva
    booking.status = status;

    // Guarda la reserva actualizada en el repositorio
    await this.bookingRepository.save(booking);

    // Emite un evento después de actualizar el estado
    this.eventService.emitEvent({ bookingId, status });
  }
}

// src/components/booking-status.enum.ts
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// src/components/booking.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Booking } from './booking.entity.ts'; // Asegúrate de que esta ruta es correcta

@EntityRepository(Booking)
export class BookingRepository extends Repository<Booking> {}

// src/components/booking.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BookingStatus } from './booking-status.enum.ts';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerName: string;

  @Column()
  serviceType: string;

  @Column()
  status: BookingStatus;
}

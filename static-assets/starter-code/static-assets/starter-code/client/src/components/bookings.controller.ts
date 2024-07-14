import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() body: { user: string, details: any }) {
    this.bookingsService.createBooking(body.user, body.details);
    return { message: 'Booking created successfully' };
  }

  @Get(':user')
  getUserBookings(@Param('user') user: string) {
    return this.bookingsService.getUserBookings(user);
  }

  @Patch(':id/status')
  updateBookingStatus(@Param('id') id: number, @Body() body: { status: string }) {
    this.bookingsService.updateBookingStatus(id, body.status);
    return { message: 'Booking status updated successfully' };
  }
}

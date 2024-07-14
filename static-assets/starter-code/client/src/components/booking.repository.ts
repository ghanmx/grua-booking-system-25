import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const BookingRepository = {
  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },

  getBookings: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bookings`);
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  },

  getBookingById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bookings/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching booking with id ${id}:`, error);
      throw error;
    }
  },

  updateBooking: async (id, bookingData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/bookings/${id}`, bookingData);
      return response.data;
    } catch (error) {
      console.error(`Error updating booking with id ${id}:`, error);
      throw error;
    }
  },

  deleteBooking: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/bookings/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting booking with id ${id}:`, error);
      throw error;
    }
  }
};

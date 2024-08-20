const rooms = require('../models/room');
const bookings = require('../models/booking');

// @desc    Book a room
// @route   POST /api/bookings
const bookRoom = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if room is available
  const room = rooms.find(r => r.id === parseInt(roomId));
  if (!room) return res.status(404).json({ message: 'Room not found' });

  const conflictingBooking = bookings.find(
    b => b.roomId === parseInt(roomId) && b.date === date &&
         ((startTime >= b.startTime && startTime < b.endTime) || 
          (endTime > b.startTime && endTime <= b.endTime))
  );

  if (conflictingBooking) {
    return res.status(400).json({ message: 'Room already booked for this time' });
  }

  const newBooking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId: parseInt(roomId),
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

// @desc    Get all bookings
// @route   GET /api/bookings
const getAllBookings = (req, res) => {
  res.status(200).json(bookings);
};

module.exports = {
  bookRoom,
  getAllBookings,
};

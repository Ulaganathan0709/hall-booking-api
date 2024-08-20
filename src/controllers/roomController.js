const rooms = require('../models/room');

// @desc    Create a room
// @route   POST /api/rooms
const createRoom = (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;

  const newRoom = {
    id: rooms.length + 1,
    numberOfSeats,
    amenities,
    pricePerHour,
  };

  rooms.push(newRoom);
  res.status(201).json(newRoom);
};

// @desc    Get all rooms
// @route   GET /api/rooms
const getAllRooms = (req, res) => {
  res.status(200).json(rooms);
};

module.exports = {
  createRoom,
  getAllRooms,
};

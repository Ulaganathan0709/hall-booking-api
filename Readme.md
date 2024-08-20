# Hall Booking API

This is a simple Node.js API for managing room bookings in a hall. The API allows you to create rooms, book rooms, and list all bookings.

## Features

- Create a room with details such as the number of seats, amenities, and price per hour.
- Book a room with details such as customer name, date, start time, and end time.
- List all rooms with booking details.
- List all bookings made by customers.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/hall-booking.git
   cd hall-booking
   npm install
   npm start
   The API will be available at http://localhost:5000
   ```

## API Endpoints

**Rooms**

** Create Room **
** Method:** `POST`
** Endpoints:** `/api/rooms`
** Example Request:**
```
{
  "numberOfSeats": 100,
  "amenities": ["Projector", "Whiteboard", "Wi-Fi"],
  "pricePerHour": 1500
}
```
** Example Response:**
**Status:** `201 Created`
```
{
  "id": 1,
  "numberOfSeats": 100,
  "amenities": ["Projector", "Whiteboard", "Wi-Fi"],
  "pricePerHour": 1500
}
```

**Get All Rooms**
**Method:** `GET`
**Endpoint:** `/api/rooms`
**Example Response:**
**Status:** `200 OK`
```
[
  {
    "id": 1,
    "numberOfSeats": 100,
    "amenities": ["Projector", "Whiteboard", "Wi-Fi"],
    "pricePerHour": 1500
  },
  {
    "id": 2,
    "numberOfSeats": 50,
    "amenities": ["AC", "Projector"],
    "pricePerHour": 800
  }
]
```
**Bookings**
**Book a Room**
**Method:** `POST`
**Endpoint:** `/api/bookings`
**Example Request:** 
```
{
  "customerName": "Jane Doe",
  "date": "2024-08-25",
  "startTime": "09:00",
  "endTime": "11:00",
  "roomId": 1
}
```
**Example Response:**
**Status:** `201 Created`

```
{
  "id": 1,
  "customerName": "Jane Doe",
  "date": "2024-08-25",
  "startTime": "09:00",
  "endTime": "11:00",
  "roomId": 1
}

```
**Get All Bookings**
**Method:** `GET`
**Endpoint:** `/api/bookings`
**Example Response** 
**Status:** `200 OK`

```
[
  {
    "id": 1,
    "customerName": "Jane Doe",
    "date": "2024-08-25",
    "startTime": "09:00",
    "endTime": "11:00",
    "roomId": 1
  },
  {
    "id": 2,
    "customerName": "John Smith",
    "date": "2024-08-25",
    "startTime": "13:00",
    "endTime": "15:00",
    "roomId": 2
  }
]
```

## LICENSE

This project is open-source and available under the MIT License.
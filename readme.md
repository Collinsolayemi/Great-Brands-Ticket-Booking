# Ticket Hotel Booking System

## Description
A Node.js application for managing ticket bookings for hotel events. This system allows users to initialize events, book tickets, manage waiting lists, and handle ticket cancellations seamlessly. It follows best practices in asynchronous programming, error handling, and Test-Driven Development (TDD).

## Design Choices
- **Node.js and Express.js**: Used for building the server and handling API requests due to their lightweight and efficient nature.
- **MongoDB Atlas**: Chosen for its scalability and ease of use as a NoSQL database, allowing for flexible data models that fit our ticket booking needs.
- **Mongoose**: Utilized as an ODM for MongoDB to manage data relationships and provide a straightforward way to interact with the database.
- **Test-Driven Development (TDD)**: Employed to ensure all functionalities are covered by tests before implementation, which helps in maintaining code quality and reliability.

## Features
- Initialize events with a set number of available tickets.
- Concurrent booking of tickets.
- Manage waiting lists for sold-out events.
- Cancel tickets and automatically assign to waiting list users.
- View available tickets and the current status of events.
- Store order details in a relational database management system (RDBMS).

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building APIs.
- **Mongoose**: ODM for MongoDB to manage data relationships.
- **Jest**: Testing framework for writing unit and integration tests.
- **MongoDB Atlas**: Cloud-based database service for storing application data.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node package manager)
- MongoDB Atlas account

### Steps
1. Clone the repository:

   ```bash
   git clone https://github.com/Collinsolayemi/Great-Brands-Ticket-Booking.git```

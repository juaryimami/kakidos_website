const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost', // Since backend is on the same host as the database
  user: 'hashimks_booking',
  password: 'BKG@hashim2025',
  database: 'hashimks_hashim_consulyancy',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

// API endpoint to save a booking
app.post('/bookings', (req, res) => {
  const {
    orderId,
    callType,
    startTime,
    endTime,
    duration,
    userId,
    userEmail,
    created,
    price,
    confirmed,
    orderStatus,
    rejectionReason,
  } = req.body;

  const query = `
    INSERT INTO bookings (
      order_id, call_type, start_time, end_time, duration, user_id, user_email,
      created, price, confirmed, order_status, rejection_reason
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    orderId,
    callType,
    startTime,
    endTime,
    duration,
    userId,
    userEmail,
    created,
    price,
    confirmed,
    orderStatus || null, // Allow null if not provided
    rejectionReason || null, // Allow null if not provided
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Failed to save booking:', err.message);
      return res.status(500).json({ error: 'Failed to save booking' });
    }
    res.status(201).json({ message: 'Booking saved', id: result.insertId });
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
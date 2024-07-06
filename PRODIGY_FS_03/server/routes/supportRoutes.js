// const express = require('express');
// const router = express.Router();
// const { createSupportTicket, getSupportTickets, getAllSupportTickets, updateSupportTicketStatus } = require('../controllers/supportController');
// const { protect, admin } = require('../middlewares/authMiddleware');

// // User routes
// router.post('/', protect, createSupportTicket);
// router.get('/', protect, getSupportTickets);

// // Admin routes
// router.get('/all', protect, admin, getAllSupportTickets);
// router.put('/:id/status', protect, admin, updateSupportTicketStatus);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { createSupportTicket, getSupportTickets, getAllSupportTickets, updateSupportTicketStatus,getSupportTicketById } = require('../controllers/supportController');
const { protect, admin } = require('../middlewares/authMiddleware');

// User routes
router.post('/', protect, createSupportTicket);

// router.post('/', protect, createSupportTicket);
router.get('/', protect, getSupportTickets);

// Admin routes
router.get('/all', protect, admin, getAllSupportTickets);
router.put('/:id/status', protect, admin, updateSupportTicketStatus);

// Fetch ticket by ID
router.get('/:id', protect, getSupportTicketById);

module.exports = router;

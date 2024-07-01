const SupportTicket = require('../models/SupportTicket');
const nodemailer = require('nodemailer');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.createSupportTicket = async (req, res) => {
  try {
    const { subject, message, contactMethod } = req.body;

    const supportTicket = new SupportTicket({
      userId: req.user.id,
      subject,
      message,
      contactMethod,
    });

    await supportTicket.save();

    // Ensure SUPPORT_EMAIL is set in your environment variables
    if (!process.env.SUPPORT_EMAIL) {
      throw new Error('Support email not defined in environment variables');
    }

    // Send email notification to support team
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SUPPORT_EMAIL,
      subject: `New Support Ticket: ${subject}`,
      text: `User ID: ${req.user.id}\nContact Method: ${contactMethod}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Support ticket created successfully', supportTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSupportTickets = async (req, res) => {
  try {
    const supportTickets = await SupportTicket.find({ userId: req.user.id });
    res.json(supportTickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllSupportTickets = async (req, res) => {
  try {
    const supportTickets = await SupportTicket.find().populate('userId', 'username email phone');
    res.json(supportTickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSupportTicketStatus = async (req, res) => {
    try {
      const { status } = req.body;
      
      // Find the support ticket by ID
      const supportTicket = await SupportTicket.findById(req.params.id);
  
      if (!supportTicket) {
        return res.status(404).json({ message: 'Support ticket not found' });
      }
  
      // Update the status of the support ticket
      supportTicket.status = status;
      await supportTicket.save();
  
      res.json({ message: 'Support ticket status updated successfully', supportTicket });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

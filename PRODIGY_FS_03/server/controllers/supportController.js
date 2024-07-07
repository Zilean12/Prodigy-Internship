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

// exports.createSupportTicket = async (req, res) => {
//   try {
//     const { subject, message, contactMethod } = req.body;

//     const supportTicket = new SupportTicket({
//       userId: req.user.id,
//       subject,
//       message,
//       contactMethod,
//     });

//     await supportTicket.save();

//     // Ensure SUPPORT_EMAIL is set in your environment variables
//     if (!process.env.SUPPORT_EMAIL) {
//       throw new Error('Support email not defined in environment variables');
//     }

//     // Send email notification to support team
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.SUPPORT_EMAIL,
//       subject: `New Support Ticket: ${subject}`,
//       text: `User ID: ${req.user.id}\nContact Method: ${contactMethod}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: 'Support ticket created successfully', supportTicket });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
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
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Support Ticket</h2>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 10px;">Ticket Details:</h3>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Message:</strong> ${message}</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Contact Method:</strong> ${contactMethod}</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Ticket ID:</strong> ${supportTicket._id}</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>User ID:</strong> ${req.user.id}</p>
          </div>
          <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Please review the ticket and respond accordingly.</p>
          <p style="color: #999; font-size: 14px; text-align: center;">This email was automatically generated. Please do not reply.</p>
        </div>
      `,
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

exports.getSupportTicketById = async (req, res) => {
  try {
    const ticket = await SupportTicket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    console.error('Error fetching ticket:', error.message); // Detailed error message
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

// exports.updateSupportTicketStatus = async (req, res) => {
//     try {
//       const { status } = req.body;
      
//       // Find the support ticket by ID
//       const supportTicket = await SupportTicket.findById(req.params.id);
  
//       if (!supportTicket) {
//         return res.status(404).json({ message: 'Support ticket not found' });
//       }
  
//       // Update the status of the support ticket
//       supportTicket.status = status;
//       await supportTicket.save();
  
//       res.json({ message: 'Support ticket status updated successfully', supportTicket });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };

  // Function to send status update email
const sendStatusUpdateEmail = async (ticket) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ticket.userId.email,
    subject: `Your support ticket (${ticket.subject}) status has been updated`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px;">Ticket Status Updated</h2>
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Subject:</strong> ${ticket.subject}</p>
          <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Status:</strong> ${ticket.status}</p>
          <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 10px;"><strong>Message:</strong> ${ticket.message}</p>
        </div>
        <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Please check your ticket for more details.</p>
        <p style="color: #999; font-size: 14px; text-align: center;">This email was automatically generated. Please do not reply.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

exports.updateSupportTicketStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // Find the support ticket by ID
    const supportTicket = await SupportTicket.findById(req.params.id).populate('userId', 'email');

    if (!supportTicket) {
      return res.status(404).json({ message: 'Support ticket not found' });
    }

    // Update the status of the support ticket
    supportTicket.status = status;
    await supportTicket.save();

    // Send email if the status is closed
    if (status === 'closed') {
      await sendStatusUpdateEmail(supportTicket);
    }

    res.json({ message: 'Support ticket status updated successfully', supportTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
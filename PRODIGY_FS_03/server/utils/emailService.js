// utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOrderEmail = (user, order) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Order Confirmation',
    text: `Dear ${user.username},\n\nYour order has been successfully placed. Here are the details:\n\nOrder ID: ${order._id}\nProducts:\n${order.products.map(product => `- ${product.productId.name} (Quantity: ${product.quantity})`).join('\n')}\n\nTotal Amount: $${order.totalAmount}\n\nThank you for shopping with us!\n\nBest regards,\nYour Store`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

const sendOrderStatusUpdateEmail = (user, order) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Order Status Update',
      text: `Dear ${user.username},\n\nThe status of your order has been updated to ${order.status}.\n\nOrder ID: ${order._id}\nProducts:\n${order.products.map(product => `- ${product.productId.name} (Quantity: ${product.quantity})`).join('\n')}\n\nTotal Amount: $${order.totalAmount}\n\nBest regards,\nYour Store`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };
  
  module.exports = { sendOrderEmail, sendOrderStatusUpdateEmail };
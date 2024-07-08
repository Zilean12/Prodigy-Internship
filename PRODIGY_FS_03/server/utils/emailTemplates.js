// exports.subscriptionConfirmation = (email) => `
// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//         }
//         .container {
//             width: 80%;
//             margin: auto;
//             padding: 20px;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             background-color: #f9f9f9;
//         }
//         .header {
//             text-align: center;
//             padding: 10px 0;
//             border-bottom: 1px solid #ddd;
//         }
//         .content {
//             padding: 20px;
//             text-align: center;
//         }
//         .footer {
//             text-align: center;
//             padding: 10px 0;
//             border-top: 1px solid #ddd;
//         }
//         .button {
//             background-color: #28a745;
//             color: white;
//             padding: 10px 20px;
//             text-decoration: none;
//             border-radius: 5px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Subscription Confirmation</h1>
//         </div>
//         <div class="content">
//             <p>Thank you for subscribing to our notifications!</p>
//             <p>You will receive updates about product launches, discounts, and newsletters.</p>
//             <p>If you did not subscribe to this service, please ignore this email.</p>
//         </div>
//         <div class="footer">
//             <p>&copy; 2024 Your Company. All rights reserved.</p>
//         </div>
//     </div>
// </body>
// </html>
// `;

// exports.alreadySubscribed = (email) => `
// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//         }
//         .container {
//             width: 80%;
//             margin: auto;
//             padding: 20px;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             background-color: #f9f9f9;
//         }
//         .header {
//             text-align: center;
//             padding: 10px 0;
//             border-bottom: 1px solid #ddd;
//         }
//         .content {
//             padding: 20px;
//             text-align: center;
//         }
//         .footer {
//             text-align: center;
//             padding: 10px 0;
//             border-top: 1px solid #ddd;
//         }
//         .button {
//             background-color: #28a745;
//             color: white;
//             padding: 10px 20px;
//             text-decoration: none;
//             border-radius: 5px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Already Subscribed</h1>
//         </div>
//         <div class="content">
//             <p>You are already subscribed to our notifications.</p>
//             <p>If you did not subscribe to this service, please ignore this email.</p>
//         </div>
//         <div class="footer">
//             <p>&copy; 2024 Your Company. All rights reserved.</p>
//         </div>
//     </div>
// </body>
// </html>
// `;

exports.subscriptionConfirmation = (email, unsubscribeToken) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            border-top: 1px solid #ddd;
        }
        .button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Subscription Confirmation</h1>
        </div>
        <div class="content">
            <p>Thank you for subscribing to our notifications!</p>
            <p>You will receive updates about product launches, discounts, and newsletters.</p>
            <p>If you did not subscribe to this service, please ignore this email.</p>
            <p>If you wish to unsubscribe, please click the link below:</p>
            <a class="button" href="https://prodigy-internship-fs03.onrender.com/api/subscribe/unsubscribe?token=${unsubscribeToken}">Unsubscribe</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

exports.alreadySubscribed = (email, unsubscribeToken) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            border-top: 1px solid #ddd;
        }
        .button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Already Subscribed</h1>
        </div>
        <div class="content">
            <p>You are already subscribed to our notifications.</p>
            <p>If you did not subscribe to this service, please ignore this email.</p>
            <p>If you wish to unsubscribe, please click the link below:</p>
            <a class="button" href="https://prodigy-internship-fs03.onrender.com/api/subscribe/unsubscribe?token=${unsubscribeToken}">Unsubscribe</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

const nodemailer = require('nodemailer'); 
const workRequest = require("../models/workRequestModel");


const uploadWorkRequest = async (req, res) => {
  const {email, requestType, requestBody} = req.body;

  try{
    const request = await workRequest.createWorkRequest(email, requestType, requestBody);

    res.status(200).json({ email, requestType: request.requestType, requestBody: request.requestType });
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
}

const uploadFile = async (req, res) => {

  console.log('made it!')

    try{

        const transporter = nodemailer.createTransport({
      // configure your email service provider details (e.g., SMTP settings)
      service: 'gmail', // Example using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use app password for security
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send email to yourself
      subject: 'File uploaded',
      text: 'Here is the file you uploaded.',
      attachments: [
        {
          filename: req.file.originalname, // Original filename
          content: req.file, // File data as a Buffer
        },
      ],
    };

    await transporter.sendMail(mailOptions);
      res.json({
    message: 'File uploaded successfully!',
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
  
    }catch(error){
       res.status(400).json({ error: error.message });
    }
    
}

module.exports = {uploadFile, uploadWorkRequest}

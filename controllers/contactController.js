import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  try {
    const { reason, name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.TRANS_USER,
        pass: process.env.TRANS_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.TRANS_USER,
      to: process.env.TRANS_RECE,
      subject: `New Contact Form Submission - ${reason}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Reason:</b> ${reason}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
};








// import nodemailer from "nodemailer";
// import expressAsyncHandler from 'express-async-handler';
// // export const sendContactMail = async (req, res) => {
// //   try {
// //     const { reason, name, phone, email, message, captcha } = req.body;

// const transporter = nodemailer.createTransport({
//   host: process.env.TRANS_HOST,
//   port: Number(process.env.TRANS_PORT),
//   secure: true, 
//   auth: {
//     user: process.env.TRANS_USER,
//     pass: process.env.TRANS_PASS,
//   },
// });
// // console.log(nodemailer.TRANS_HOST);
// //password reset controller
// export const sendContactMail = expressAsyncHandler(async (req, res) => {
//   const { reason, name, phone, email, message} = req.body;
//   // const { email, message } = req.body;
//   // const newPassword = generatePassword();
//   console.log(name);
//   var mailOptions = {
//     // from: process.env.TRANS_HOST,
//     // to: email,
//     // subject: "Reset Password",
//     // text: `Don't worry your new password is ${newPassword}`,
//     // html: `Don't worry your new password is <b>${newPassword}</b>`
//     from: process.env.TRANS_USER,
//           to: email,
//           subject: `New Contact Form Submission - ${reason}`,
//           html: `
//             <h2>New Contact Request</h2>
//             <p><b>Reason:</b> ${reason}</p>
//             <p><b>Name:</b> ${name}</p>
//             <p><b>Phone:</b> ${phone}</p>
//             <p><b>Email:</b> ${email}</p>
//             <p><b>Message:</b> ${message}</p>
//           `,
//   };
//   console.log(process.env.TRANS_USER);
//   console.log(process.env.TRANS_PORT);
//   transporter.sendMail(mailOptions, async function(error, info){
//     if(error) {
//       console.log(error)
//     } else {
//       console.log("sent");
//     }
//     // changePassword(email, newPassword);
//   })
// })

//     await transporter.sendMail({
//       from: email,
//       to: process.env.MY_EMAIL,
//       subject: `New Contact Form Submission - ${reason}`,
//       html: `
//         <h2>New Contact Request</h2>
//         <p><b>Reason:</b> ${reason}</p>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b> ${message}</p>
//         <p><b>Captcha:</b> ${captcha}</p>
//       `,
//     });

//     res.json({ message: "Message sent successfully!" });

//   } catch (err) {
//     res.status(500).json({ message: "Error sending message", error: err });
//   }
// };





// import nodemailer from 'nodemailer'
// import dotenv from "dotenv";
// import expressAsyncHandler from 'express-async-handler'

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   host: process.env.TRANS_HOST,
//   port: process.env.TRANS_PORT,
//   secure: false, 
//   auth: {
//     user: process.env.TRANS_USER,
//     pass: process.env.TRANS_PASS,
//   },
// });

// // const generatePassword = () => {
// //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //   let result = '';
// //   for (let i = 0; i < 6; i++) {
// //     result += characters.charAt(Math.floor(Math.random() * characters.length));
// //   }
// //   return result;
// // }

// const changePassword = async (email, newPassword) => {
//   try {
//     const hashedPassword = await bcrypt.hash(newPassword, 12);    
//     console.log(hashedPassword);
//     console.log(email);
//     const updatedProfile = await users.findOneAndUpdate(
//       { email: email },
//       { $set: { password: hashedPassword } }
//     );
//     } catch (error) {
//     console.log(error)
//   }
// }
// //fetch all users controller
// export const getAllUsers = async (req, res) => {
//   try {
//     const allUsers = await users.find();
//     const allUserDetails = [];
//     allUsers.forEach((user) => {
//       allUserDetails.push({
//         _id: user._id,
//         name: user.name,
//         about: user.about,
//         tags: user.tags,
//         joinedOn: user.joinedOn,
//       });
//     });
//     res.status(200).json(allUserDetails);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// //update profile controller
// export const updateProfile = async (req, res) => {
//   const { id: _id } = req.params;
//   const { name, about, tags } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("question unavailable...");
//   }

//   try {
//     const updatedProfile = await users.findByIdAndUpdate(
//       _id,
//       { $set: { name: name, about: about, tags: tags } },
//       { new: true }
//     );
//     res.status(200).json(updatedProfile);
//   } catch (error) {
//     res.status(405).json({ message: error.message });
//   }
// };

// //password reset controller
// export const sendEMail = expressAsyncHandler(async (req, res) => {
//   const { email, message } = req.body;
//   const newPassword = generatePassword();
//   var mailOptions = {
//     from: process.env.TRANS_HOST,
//     to: email,
//     subject: "Reset Password",
//     text: `Don't worry your new password is ${newPassword}`,
//     html: `Don't worry your new password is <b>${newPassword}</b>`
//   };
//   transporter.sendMail(mailOptions, async function(error, info){
//     if(error) {
//       console.log(error)
//     }
//     console.log("sent");
//     changePassword(email, newPassword);
//   })
// })

// //user authentication OTP
// export const sendOTP = expressAsyncHandler(async (req, res) => {
//   const { email } = req.body;
//   const { userOTP } = req.body;

//   var mailOptions = {
//     from: process.env.TRANS_HOST,
//     to: email,
//     subject: "Authentication OTP",
//     text: `Your four digit authenication OTP is ${userOTP}, valid for 5 minutes only.`,
//     html: `Your four digit authenication OTP is <b>${userOTP}</b>, <br/>valid for 5 minutes only.`
//   };
//   transporter.sendMail(mailOptions, async function(error, info){
//     if(error) {
//       console.log(error)
//     } else {
//       console.log("sent");
//     }
//   })
// })

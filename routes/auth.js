import { Router } from "express";
import { register } from "../controllers/authController.js";
//Register
const router = Router();
router.post("/register", register);

// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   const newUser = new User({
//     username,
//     email,
//     password: CryptoJS.AES.encrypt(
//       password,
//       process.env.SECRET_WORD
//     ).toString(),
//   });
//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//     console.log(savedUser);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//Login

export default router;

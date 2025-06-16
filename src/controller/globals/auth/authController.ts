/*class authController {
  async regUser() {
    // Registration/SignUp logic(incoming data validation, user creation, etc.)
    //User name, email, password
    //processing/checking the incoming data, validating it, and creating a new user
    //phone number, email, password, etc.
    //dbquery to create a new user
    //hashing the password before saving it to the database
  }

  async loginUser() {
    // Login logic
  }

  async logoutUser() {
    // Logout logic
  }
  async forgetPassword() {
    // Forget password logic
  }
  async resetPassword() {
    // Reset password logic
  }

}
*/
import { Request, Response } from 'express';
import User from '../../../database/models/userModel'; // Adjust the import path as necessary
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jwt for token generation (if needed)
/*const registerUser = async (req: Request, res: Response) => {
 const { username, email, password } = req.body;
 // Here you would typically validate the input, hash the password,
 if (!username || !email || !password) {
   return res.status(400).json({ message: 'All fields are required' });
 }
 else {
   await User.create({
     username,
     email,
     password
   })
     .then(() => {
       res.status(201).json({ message: 'User registered successfully' });
     })
     .catch((error) => {
       res.status(500).json({ error: 'Registration failed' });
     });
 }
};
//login flow
email username pass
google auth
---> data accept --> validation
first check if the username/email and password exists
if exists then check if the password is correct
// if correct then login the user
//only password correct then email not correct then return password
// or username not correct

*/

class AuthController {
  static async registerUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    if (req.body === undefined || req.body === null) {//
      return res.status(400).json({ message: 'No data sent' });
    }
    // Here you would typically validate the input, hash the password,
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    await User.create({
      username,
      email,
      password: await bcrypt.hashSync(password, 10) // Hash the password before saving
    })
      .then(() => {
        res.status(201).json({ message: 'User registered successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error', details: error });
      });
  }
  static async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Invalid email or password' });
      }
      const isPasswordMatch = await bcrypt.compareSync(password, user.password);
      if (isPasswordMatch) {
        // FIX: Use 'id' (lowercase) in JWT payload for consistency with middleware
        const token = jwt.sign({ id: user.id, username: "Saroj" }, "thisissecret", { expiresIn: '30d' });
        return res.status(200).json({ token, message: 'Login successful', userId: user.id });
      } else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      // Here you would typically generate a token and send it back
      // For simplicity, we are just returning a success message
      // You can use JWT or any other method to handle authentication
      // const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
      // res.status(200).json({ message: 'Login successful', token });
      // For now, we will just return the user ID
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', details: error });
    }
  }
}

export default AuthController; // Export the class if needed

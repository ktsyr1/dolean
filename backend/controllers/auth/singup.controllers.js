import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js'; // Adjust the path as necessary

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check If The Input Fields are Valid
        if (!username || !password || !email) {
            return res
                .status(400)
                .json({ message: "Please Input Username and Password and email" });
        }

        // Check If User Exists In The Database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash The User's Password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save The User To The Database
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            'your_secret_key', // Replace with your secret key
            { expiresIn: '1h' } // Token expiration time
        );

        return res
            .status(201)
            .json({ message: "User Created Successfully", token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error creating user" });
    }
};
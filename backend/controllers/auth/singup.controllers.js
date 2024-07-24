import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js'; // Adjust the path as necessary

export default async function signUp(req, res) {
    try {
        const { name, email, password , phone} = req.body;

        // Check If The Input Fields are Valid
        if (!name || !password || !email || !phone) {
            return res
                .status(400)
                .json({ message: "Please Input name and Password and email" });
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
            name,
            email,
            phone,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            // 'your_secret_key', // Replace with your secret key 
            process.env.JWT_SECRET,
            // { expiresIn: '1h' } // Token expiration time
        );

        return res
            .status(201)
            .json({ message: "User Created Successfully", token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error creating user" });
    }
};


export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user with the hashed password
        const user = await User.create({ ...req.body, password: hashedPassword });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
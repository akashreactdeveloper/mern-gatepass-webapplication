const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const jwt = require('jsonwebtoken');

async function userSigninController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Please provide email",
                error: true,
                success: false,
            });
        }
        
        if (!password) {
            return res.status(400).json({
                message: "Please provide password",
                error: true,
                success: false,
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist!",
                error: true,
                success: false,
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Incorrect password!",
                error: true,
                success: false,
            });
        }

        const tokenData = {
            _id: user._id,
            email: user.email,
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

        const tokenOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set to true in production
            sameSite: 'Strict', // Adjust as needed
        };

        res.cookie("token", token, tokenOptions).status(200).json({
            message: "Login successfully",
            data: token,
            success: true,
            error: false,
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false,
        });
    }
}

module.exports = userSigninController;

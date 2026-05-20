// create mini applications
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { userApp } from './UserAPI.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import multer from 'multer'

export const commonApp = exp.Router()
import { upload } from '../config/multer.js'
import { uploadToCloudinary } from '../config/cloudinaryUpload.js'
import cloudinary from '../config/cloudinary.js'

const { sign } = jwt

// Multer error handling middleware
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err.message);
    // Continue without file if multer fails
    return next();
  } else if (err) {
    console.error("File upload error:", err.message);
    return next();
  }
  next();
};

// Route to register
commonApp.post('/users', (req, res, next) => {
  upload.single("profileImageUrl")(req, res, (err) => {
    handleMulterError(err, req, res, () => {
      registerUser(req, res, next);
    });
  });
});

async function registerUser(req, res, next) {
    let cloudinaryResult;

    try {
        // get the details of the user (extract only schema fields to avoid strict:"throw" errors)
        const { firstName, lastName, email, password, role } = req.body;
        
        console.log("Registration attempt:", { firstName, lastName, email, role });

        // Validation
        if (!firstName || !lastName || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = { firstName, lastName, email, password, role };

        // check for the roles : only author and user not admin
        let allowedRoles = ['USER', 'AUTHOR']
        if (!allowedRoles.includes(newUser.role))
            return res.status(400).json({ message: "invalid role" })

        /// upload image to cloudinary from memoryStorage
        if (req.file) {
            try {
                console.log("Uploading file to Cloudinary");
                cloudinaryResult = await uploadToCloudinary(req.file.buffer);
                newUser.profileImageUrl = cloudinaryResult?.secure_url;
            } catch (err) {
                console.error("Cloudinary upload error:", err);
                newUser.profileImageUrl = "";
            }
        } else {
            newUser.profileImageUrl = "";
        }

        // replace the password with hashed password
        newUser.password = await hash(newUser.password, 12)

        // create document
        const userDocument = new UserModel(newUser);

        // save document
        console.log("Saving user to database");
        await userDocument.save()

        // send respone
        return res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error("Registration error:", err.message);
        console.error("Error details:", err);
        
        //delete image from cloudinary
        if (cloudinaryResult?.public_id) {
            try {
                await cloudinary.uploader.destroy(cloudinaryResult.public_id)
            } catch (e) {
                console.error("Cloudinary deletion error:", e);
            }
        }

        next(err);
    }
}

// route for login
commonApp.post('/login', async (req, res, next) => {
    try {
        // get email and password from the req
        const { email, password } = req.body;

        // get user details
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // compare the password with og password
        let isMatched = await compare(password, user.password)
        if (!isMatched) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // TOKEN CREATION
        if (!process.env.KEY) {
            return res.status(500).json({ message: "Server configuration error", error: "JWT secret KEY is not set" });
        }

        const signedToken = sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                profileImageUrl: user.profileImageUrl
            },
            process.env.KEY,
            { expiresIn: "1h" }
        )

        // set token to the cookie header 
        res.cookie("token", signedToken, {
            httpOnly: true,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production"
        })

        // remove the password field from the user obj
        const userObj = user.toObject();
        delete userObj.password;

        res.status(200).json({ message: "Login Successful", payload: userObj })
    } catch (err) {
        console.error("Login Error:", err);
        next(err);
    }
})

// route for logout
commonApp.get('/logout', (req, res) => {
    // delete the teoken from the cookie storage
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })
    res.status(200).json({ message: "Logged out successfully" });
})

// Page for refresh
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
    res.status(200).json({
        message: "authenticated",
        payload: req.user,
    });
});

// change the password
commonApp.put('/password', verifyToken("ADMIN", "AUTHOR", "USER"), async (req, res) => {
    // check if current and new Passwords are same
    const { currentPassword, newPassword } = req.body;

    if (currentPassword === newPassword) {
        return res.json({ message: "Current and new passwords should not be the same" })
    }

    // get current password from the role loggedin
    const userId = req.user?.id;

    // find the user
    const user = await UserModel.findById(userId);

    const isMatched = await compare(currentPassword, user.password);

    //chck the current paswword of logged in role and req are same/not
    if (!isMatched) {
        return res.status(400).json({ message: "Current password is not matching" })
    }

    //hash the password
    const hashedPassword = await hash(newPassword, 12);

    //replace the password and save
    user.password = hashedPassword
    user.save();

    //send res
    res.status(200).json({ message: "Password updated" })
})

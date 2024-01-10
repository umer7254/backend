import User from "../models/user.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        res.status(200).json({
            message: "ok",
            data: savedUser
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

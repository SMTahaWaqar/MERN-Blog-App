import User from "../models/User";
import bcrypt from 'bcryptjs'

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({message: "No users found"})
    }
    return res.status(200).json({users})
}

export const signUp = async (req, res, next) => {
    const {name, email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        return console.log(error)
    }

    if (existingUser) {
        return res.status(404).json({message: "User already exist"})
    }

    const  hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword
    })
    try {
        await user.save();
    } catch (error) {
        return console.log(error);
    }

    return res.status(200).json({user})
}


export const login = async (req, res, next) => {
    const { email, password } = req.body
    
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        return console.log(error)
    }

    if (!existingUser) {
        return res.status(404).json({message: "User doesn't exist"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(404).json({message: "Incorrect Password"})
    }
    return res.status(200).json({message: "Logged In"})
}
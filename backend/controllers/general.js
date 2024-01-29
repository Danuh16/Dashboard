import User from "../models/UserSchema.js";


export const getUser = async (req, res) => {
    try {
        const { id } =req.parms;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
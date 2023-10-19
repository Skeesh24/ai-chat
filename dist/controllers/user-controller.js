import User from '../models/user-schema.js';
export const getAllUsers = async (req, res, next) => {
    // Get all users
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(400).json({ message: 'ERROR', cause: error });
    }
};
//# sourceMappingURL=user-controller.js.map
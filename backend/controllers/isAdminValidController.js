import adminDataModel from "../models/adminDataModel.js";

let isAdminValid = async (req, res) => {
    let { email, password } = req.body;

    try {
        let admin = await adminDataModel.findOne({ email, password });

        if (!admin) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful" });

    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};

export default isAdminValid;
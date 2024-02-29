import User from "../Models/User.js";

const userController = {
  profileSetup: async (req, res, next) => {
    try {
      const post = req.body;
      console.log(post);
      const userExist = await User.findOne({ email: email });

      if (userExist) {
        return res.status(400).json({ msg: "User already exists" });
      }
      res.status(200).json({ data: newUser });
    } catch (error) {
      res.status(400).json("Koi BKL hi hoga jiska ye error aaya hoga");
    }
  },
  login: (req, res, next) => {
    // .... all the logic for login
  },
  logout: (req, res, next) => {
    // .... all the logic for logout
  },
};

export default userController;

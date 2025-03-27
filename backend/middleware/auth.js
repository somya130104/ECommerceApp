import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const token = req.headers["token"] || req.headers["authorization"];
  console.log("It has hit the authUser with token " + token);

  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Authorization token is missing. Please log in again.",
      });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    

    if (!decoded || !decoded.userId) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }

    // Attach the user ID to the request object
    req.body.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Token Verification Error:", error);

    const errorMessage =
      error.name === "TokenExpiredError"
        ? "Token has expired. Please log in again."
        : "Invalid token. Access denied.";

    res.status(401).json({ success: false, message: errorMessage });
  }
};

export default authUser;

import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ message: "Missing authorization token." });
  }

  accessToken = accessToken.split(" ")[1];

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Missing authorization headers",
      });
    }

    req.userId = decoded.sub;
    req.userEmail = decoded.email;
    req.isAdm = decoded.isAdm;

    next();
  });
};

export default verifyAuthTokenMiddleware;

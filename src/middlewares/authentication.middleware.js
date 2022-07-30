import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = (rq, rs, next) => {
  let accessToken = rq.headers.authorization;

  if (!accessToken) {
    return rs.status(401).json({ message: "Missing authorization token." });
  }

  accessToken = accessToken.split(" ")[1];

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return rs.status(401).json({
        message: "Missing authorization headers",
      });
    }

    rq.userId = decoded.sub;
    rq.userEmail = decoded.email;
    rq.isAdm = decoded.isAdm;

    next();
  });
};

export default verifyAuthTokenMiddleware;

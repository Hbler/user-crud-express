import users from "../database";

const verifyAdminStatusMiddleware = (req, res, next) => {
  const isAdm = req.isAdm;

  if (isAdm) {
    return res.json(users);
  }

  return res.status(401).json({
    message: "Unauthorized",
  });
};

export default verifyAdminStatusMiddleware;

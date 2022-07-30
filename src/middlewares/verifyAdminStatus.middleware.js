import users from "../database";

const verifyAdminStatusMiddleware = (rq, rs, next) => {
  const isAdm = rq.isAdm;

  if (isAdm) {
    return rs.json(users);
  }

  return rs.status(401).json({
    message: "Unauthorized",
  });
};

export default verifyAdminStatusMiddleware;

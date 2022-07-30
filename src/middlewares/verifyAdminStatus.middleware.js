import users from "../database";

const verifyAdminStatusMiddleware = (rq, rs, next) => {
  const id = rq.userId;

  const user = users.find((user) => user.uuid === id);

  return user.isAdm
    ? next()
    : rs.status(401).json({
        message: "Unauthorized",
      });
};

export default verifyAdminStatusMiddleware;

import users from "../database";

const verifyEmailAvailabilityMiddleware = (rq, rs, next) => {
  const { email } = rq.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return rs.status(400).json({ message: "E-mail already registered." });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;

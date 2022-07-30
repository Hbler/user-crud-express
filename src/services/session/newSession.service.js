import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import users from "../../database";

const newSessionService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) return false;

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) return false;

  const token = jwt.sign(
    { email: user.email, isAdm: user.isAdm },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: user.uuid,
    }
  );

  return { token };
};

export default newSessionService;

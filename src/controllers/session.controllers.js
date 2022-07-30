import newSessionService from "../services/session/newSession.service";

const newSessionController = async (rq, rs) => {
  const { email, password } = rq.body;

  const signedUser = await newSessionService({ email, password });

  if (!signedUser) {
    return rs.status(401).json({
      message: "Wrong email/password",
    });
  }

  return rs.json(signedUser);
};

export default newSessionController;

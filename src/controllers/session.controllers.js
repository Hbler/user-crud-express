import newSessionService from "../services/session/newSession.service";

const newSessionController = async (req, res) => {
  const { email, password } = req.body;

  const signedUser = await newSessionService({ email, password });

  if (!signedUser) {
    return res.status(401).json({
      message: "Wrong email/password",
    });
  }

  return res.json(signedUser);
};

export default newSessionController;

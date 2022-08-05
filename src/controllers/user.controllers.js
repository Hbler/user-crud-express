import createUserService from "../services/user/createUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import retrieveUserService from "../services/user/retrieveUser.service";
import updateUserService from "../services/user/updateUser.service";
import listUsersService from "../services/user/listUsers.service";
import users from "../database";

export const createUserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;

  const user = await createUserService({ email, name, password, isAdm });

  return res.status(201).json(user);
};

export const deleteUserController = (req, res) => {
  const { id } = req.params;
  const isAdm = req.isAdm;
  const userId = req.userId;

  const deleteUser = deleteUserService({ id, isAdm, userId });

  if (!deleteUser) {
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }

  return res.json(deleteUser);
};

export const retrieveUserController = (req, res) => {
  const id = req.userId;

  const profile = retrieveUserService(id);

  if (!profile) {
    return res.status(401).json({ message: "Invalid token." });
  }

  return res.json(profile);
};

export const updateUserController = (req, res) => {
  const { email, name, password } = req.body;
  const { id } = req.params;
  const isAdm = req.isAdm;
  const userId = req.userId;

  const updatedUser = updateUserService({
    email,
    name,
    password,
    id,
    isAdm,
    userId,
  });

  if (!updatedUser) {
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }

  return res.json(updatedUser);
};

export const listUsersController = (req, res) => {
  const isAdm = req.isAdm;

  if (!isAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const users = listUsersService();

  return res.json(users);
};

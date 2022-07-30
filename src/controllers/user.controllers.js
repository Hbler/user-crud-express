import createUserService from "../services/user/createUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import retrieveUserService from "../services/user/retrieveUser.service";
import updateUserService from "../services/user/updateUser.service";
import listUsersService from "../services/user/listUsers.service";
import users from "../database";

export const createUserController = async (rq, rs) => {
  const { email, name, password, isAdm } = rq.body;

  const user = await createUserService({ email, name, password, isAdm });

  return rs.status(201).json(user);
};

export const deleteUserController = (rq, rs) => {
  const { id } = rq.params;
  const isAdm = rq.isAdm;
  const userId = rq.userId;

  const deleteUser = deleteUserService({ id, isAdm, userId });

  if (!deleteUser) {
    return rs.status(401).json({
      message: "Missing admin permissions",
    });
  }

  return rs.json(deleteUser);
};

export const retrieveUserController = (rq, rs) => {
  const id = rq.userId;

  const profile = retrieveUserService(id);

  if (!profile) {
    return rs.status(401).json({ message: "Invalid token." });
  }

  return rs.json(profile);
};

export const updateUserController = (rq, rs) => {
  const { email, name, password } = rq.body;
  const { id } = rq.params;
  const isAdm = rq.isAdm;
  const userId = rq.userId;

  const updatedUser = updateUserService({
    email,
    name,
    password,
    id,
    isAdm,
    userId,
  });

  if (!updatedUser) {
    return rs.status(401).json({
      message: "Missing admin permissions",
    });
  }

  return rs.json(updatedUser);
};

export const listUsersController = (rq, rs) => {
  const isAdm = rq.isAdm;

  if (!isAdm) {
    return rs.status(401).json({
      message: "Unauthorized",
    });
  }

  const users = listUsersService();

  return rs.json(users);
};

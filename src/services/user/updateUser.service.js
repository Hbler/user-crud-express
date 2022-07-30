import users from "../../database";

const updateUserService = ({ email, name, password, id, isAdm, userId }) => {
  const updatedUser = {
    email,
    name,
    password,
    updatedOn: new Date(),
  };

  for (let key in updatedUser) {
    !!updatedUser[key] ? {} : delete updatedUser[key];
  }

  const userIndex = users.findIndex((user) => user.uuid === id);

  if (userIndex === -1) {
    return "User not found";
  }

  if (isAdm) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    const update = users[userIndex];
    return {
      email: update.email,
      name: update.name,
      uuid: update.uuid,
      createdOn: update.createdOn,
      updatedOn: update.updatedOn,
      isAdm: update.isAdm,
    };
  } else if (!isAdm && users[userIndex].uuid === userId) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    const update = users[userIndex];
    return {
      email: update.email,
      name: update.name,
      uuid: update.uuid,
      createdOn: update.createdOn,
      updatedOn: update.updatedOn,
      isAdm: update.isAdm,
    };
  } else {
    return false;
  }
};

export default updateUserService;

import users from "../../database";

const deleteUserService = ({ id, isAdm, userId }) => {
  const userIndex = users.findIndex((user) => user.uuid === id);

  if (userIndex === -1) {
    return "User not found";
  }

  if (isAdm) {
    users.splice(userIndex, 1);
    return {
      message: "User deleted with success",
    };
  } else if (!isAdm && users[userIndex].uuid === userId) {
    users.splice(userIndex, 1);
    return {
      message: "User deleted with success",
    };
  } else {
    return false;
  }
};

export default deleteUserService;

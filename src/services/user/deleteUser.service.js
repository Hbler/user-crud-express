import users from "../../database";

const deleteUserService = ({ id, isAdm }) => {
  const userIndex = users.findIndex((user) => user.uuid === id);

  if (userIndex === -1) {
    return "User not found";
  }

  if (isAdm) {
    users.splice(userIndex, 1);
    return {
      message: "User deleted with success",
    };
  } else if (users[userIndex].uuid === id) {
    users.splice(userIndex, 1);
    return {
      message: "User deleted with success",
    };
  } else {
    return false;
  }
};

export default deleteUserService;

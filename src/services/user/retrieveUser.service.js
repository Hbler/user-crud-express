import users from "../../database";

const retrieveUserService = (userId) => {
  const user = users.find((user) => user.uuid === userId);

  if (user) {
    return {
      email: user.email,
      name: user.name,
      uuid: user.uuid,
      createdOn: user.createdOn,
      updatedOn: user.updatedOn,
      isAdm: user.isAdm,
    };
  } else return false;
};

export default retrieveUserService;

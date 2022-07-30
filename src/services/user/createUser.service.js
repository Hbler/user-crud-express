import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

const createUserService = async ({ email, name, password, isAdm }) => {
  const hashedPassword = await hash(password, 10);

  const newUser = {
    email,
    name,
    isAdm,
    password: hashedPassword,
    uuid: uuidv4(),
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);

  return {
    email: newUser.email,
    name: newUser.name,
    uuid: newUser.uuid,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
    isAdm: newUser.isAdm,
  };
};

export default createUserService;

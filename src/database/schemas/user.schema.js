import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required("Adicione um nome"),
  email: yup.string().email().required("Adicione um email"),
  password: yup.string().required("Adicione uma senha"),
  isAdm: yup.boolean().required(),
});

export default userSchema;

import express from "express";
import { v4 as uuidv4 } from "uuid";

const port = 3001;
const app = express();
app.use(express.json());

const users = [];

app.post("/users", (rq, rs) => {
  console.log(rq.body);

  const { email, name } = rq.body;
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return rs.status(400).json({ error: "This email is already being used" });
  }

  users.push({
    email,
    name,
    id: uuidv4(),
  });

  return rs.status(201).send();
});

app.get("/users", (rq, rs) => {
  rs.json(users);
});

app.listen(port, () => {});

import express from "express";
import userRouter from "./routers/users.routes";
import loginRouter from "./routers/session.routes";

const port = 3001;
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(port, () => {});

export default app;

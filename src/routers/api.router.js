import { Router } from "express";
/* import authRouter from "./api/auth.router.js";
import productsRouter from "./api/";
import usersRouter from "./api/"; */
import mocksRouter from "./api/mocks.router.js";

const apiRouter = Router();

apiRouter.use("/mocks", mocksRouter);


export default apiRouter;
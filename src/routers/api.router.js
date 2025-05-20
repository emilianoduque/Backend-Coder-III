import { Router } from "express";
/* import authRouter from "./api/auth.router.js";
import productsRouter from "./api/";
import usersRouter from "./api/"; */
import mocksRouter from "./api/mocks.router.js";
import cartsRouter from "./api/carts.router.js";
import productsRouter from "./api/products.router.js";
import usersRouter from "./api/users.router.js";

const apiRouter = Router();

apiRouter.use("/products", productsRouter)
apiRouter.use("/mocks", mocksRouter);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/users", usersRouter);


export default apiRouter;
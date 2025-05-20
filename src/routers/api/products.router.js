import CustomRouter from "../../helpers/CustomRouter.helper.js";
import { productsController } from "../../controllers/controller.js";

class ProdutsRouter extends CustomRouter {
    constructor(){
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["ADMIN"], productsController.createOne);
        this.read("/", ["PUBLIC"], productsController.readAll);
        this.read("/:id", ["PUBLIC"], productsController.readById);
        this.update("/:id", ["ADMIN"], productsController.updateById);
        this.delete("/:id", ["ADMIN"], productsController.destroyById);   
    }
}

const productsRouter = new ProdutsRouter();
export default productsRouter.getRouter();
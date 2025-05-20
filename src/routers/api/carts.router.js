import CustomRouter from "../../helpers/CustomRouter.helper.js";
import { addProductToCart, readProductsFromUser, updateQuantity, removeProductFromCart } from "../../controllers/carts.controller.js";

class CartsRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["USER", "ADMIN"], addProductToCart);
    this.read("/", ["USER"], readProductsFromUser);
    this.update("/:cart_id", ["USER", "ADMIN"], updateQuantity);
    this.delete("/:cart_id", ["USER", "ADMIN"], removeProductFromCart);
  };
}

const cartsRouter = new CartsRouter();
export default cartsRouter.getRouter();
import CustomRouter from "../../helpers/CustomRouter.helper.js";
import createMockProduct from "../../helpers/mocks/products.mock.js";
import createMockUser from "../../helpers/mocks/users.mock.js";
import {productsService, usersService} from "../../services/service.js";

class MocksRouter extends CustomRouter {
    constructor(){
        super();
        this.init();
    }
    init = () => {
        this.read("/products/:np/users/:nu", ["PUBLIC"], async(req,res) => {
            const {np, nu} = req.params;

            //para crear productos
            for(let i = 0; i < parseInt(np); i++){
                const product = createMockProduct();
                await productsService.createOne(product);
            };

            //para crear users
            for(let i = 0; i < parseInt(nu); i++){
                const user = createMockUser();
                await usersService.createOne(user);
            };

            res.json201({ message: "Mocks creados", products: np, users: nu});
        })
    }
};

const mocksRouter = new MocksRouter();
export default mocksRouter.getRouter();
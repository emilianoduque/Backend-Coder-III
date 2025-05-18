import CustomRouter from "../../helpers/CustomRouter.helper.js";
import { register, login, signout, online, failure } from "../../controllers/auth.controller.js";
import 

class AuthRouter extends CustomRouter{
    constructor(){
        super();
        this.init();
    }
    init = () => {
        
    }
}
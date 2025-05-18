import {cartsService} from "../services/service.js";

const addProductToCart = async(req,res) => {
    const {_id} = req.user;
    const {product_id, quantity} = req.body;
    const response = await cartsService.addProductToCart({
        product_id: product_id,
        user_id: _id,
        quantity: quantity,
    });
    res.json201(response);
};

const readProductsFromUser = async(req,res) => {
    const {_id} = req.user;
    const response = await cartsService.readProductsFromUser({
        user_id: _id,
    });
    if(response.length === 0){
        res.json200(response);
    } else {
        res.json404();
    }
};

const updateQuantity = async(req,res) => {
    const {cart_id} = req.params;
    const {quantity} = req.body;
    const response = await cartsService.updateCart(cart_id, {quantity});
    if(!response){
        res.json404();
    } else {
        res.json200(response);
    }
};

const removeProductFromCart = async (req,res) => {
    const {cart_id} = req.params;
    const response = await cartsService.removeProductFromCart(cart_id);
    if(!response){
        res.json404();
    } else {
        res.json200(response);
    }
}

export {removeProductFromCart, readProductsFromUser, updateQuantity, addProductToCart};


const express=require('express')
const router=express.Router()
const {createUser, updateUser, loginUser, getProfile} = require("../controllers/userController")
const {createProduct, getProduct, getProductById, updateProduct, deleteProduct}= require("../controllers/productController")
const {authentication} = require("../middleware/middleware")
const { updateCart, getCart, deleteCart } = require('../controllers/cartController')

//==================================  users  ============================//

router.post("/register", createUser)
router.post("/login", loginUser)
router.get("/user/:userId/profile",authentication,getProfile)
router.put("/user/:userId/profile", authentication, updateUser)

//================================== product ============================//

router.post("/products", createProduct)
router.get("/products", getProduct)
router.get("/products/:productId",getProductById)
router.put("/products/:productId", updateProduct)
router.delete("/products/:productId", deleteProduct)

//================================ cart ================================//
router.get("/users/:userId/cart",getCart)
router.put("/users/:userId/cart", updateCart)
router.delete("/users/:userId/cart",authentication,deleteCart)

router.all("/*",(req,res)=>{
    res.status(404).send({msg:"invalid http request"})
})

module.exports=router

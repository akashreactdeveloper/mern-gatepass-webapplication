const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSigninController = require('../controller/user/userSignin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const AwlformDataController = require('../controller/awlForm/AwlFormData')
const getAwlGatepassController = require('../controller/awlForm/getAwlGatepass')
const CategoryGatepass = require('../controller/awlForm/CategoryGatepass')

router.post("/signup",userSignUpController)
router.post("/",userSigninController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin Panel
router.get("/all-users",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//generateAwlGatepass
router.post("/Awl-formdata",authToken,AwlformDataController)
router.get("/get-AwlGatepass",getAwlGatepassController)
router.get("/gatepass-type",CategoryGatepass)


module.exports = router
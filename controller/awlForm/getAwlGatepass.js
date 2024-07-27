const AwlModel = require("../../models/AwlModel")

const getAwlGatepassController = async(req,res)=>{
    try{
        const allAwlGatepass = await AwlModel.find().sort({createdAt : -1 })

        res.json({
            message : "All Awl Gatepasses",
            success : true,
            error : false,
            data : allAwlGatepass
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getAwlGatepassController
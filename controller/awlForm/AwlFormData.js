const AwlModel = require("../../models/AwlModel")

async function AwlformDataController(req,res){
    try{
        const uploadAwlFormData = new AwlModel(req.body)
        const saveuploadAwlFormData = await uploadAwlFormData.save()

        res.status(201).json({
            message : "Awl Gatepass created Successfully",
            error : false,
            success : true,
            data : saveuploadAwlFormData
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = AwlformDataController